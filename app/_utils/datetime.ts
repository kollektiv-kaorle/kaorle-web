import {
  format,
  formatDistanceToNow,
  formatDistanceToNowStrict,
  formatDuration,
  isAfter,
  isBefore,
  isValid,
  parse,
  intlFormatDistance,
  parseISO as _parseISO,
} from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { startOfWeekWithOptions, getWeekWithOptions } from "date-fns/fp";
import { de } from "date-fns/locale";

export const startOfWeekDe = startOfWeekWithOptions({ weekStartsOn: 1 });
export const getWeekDe = getWeekWithOptions({ weekStartsOn: 1 });

const parseIfString = (date: Date | number | string): Date | number => {
  // dates from api are serialized but type may still be Date
  if (typeof date === "string") {
    return parseISO(date);
  }
  return date;
};

export function parseISO(
  argument: string | Date,
  options?: {
    additionalDigits?: 0 | 1 | 2;
  }
): Date {
  if (argument instanceof Date) {
    return argument;
  }
  return _parseISO(argument, options);
}

export function formatDe(
  date: number | Date,
  formatString: string,
  options?: Parameters<typeof formatInTimeZone>[3]
) {
  return formatInTimeZone(parseIfString(date), "Europe/Berlin", formatString, {
    locale: de,
    ...options,
  });
}

export function formatDistanceToNowStrictDe(
  date: number | Date,
  options?: Parameters<typeof formatDistanceToNowStrict>[1]
) {
  return formatDistanceToNowStrict(parseIfString(date), {
    locale: de,
    ...options,
  });
}

export function formatDistanceToNowDe(
  date: number | Date,
  options?: Parameters<typeof formatDistanceToNow>[1]
) {
  return formatDistanceToNow(parseIfString(date), {
    addSuffix: true,
    locale: de,
    ...options,
  });
}

export function intlFormatDistanceDe(
  date: number | Date,
  baseDate: number | Date,
  options?: Parameters<typeof intlFormatDistance>[2]
) {
  return intlFormatDistance(parseIfString(date), parseIfString(baseDate), {
    locale: "de-DE",
    ...options,
  });
}

export function parseDe(
  dateString: string,
  formatString: string,
  referenceDate: Date | number,
  options?: Parameters<typeof parse>[3]
): Date {
  return parse(dateString, formatString, referenceDate, {
    locale: de,
    ...options,
  });
}

export const parseMultipleDe = (
  dateString: string,
  formatStrings: string[],
  referenceDate: Date | number,
  options?: Parameters<typeof parse>[3],
  isValidExtended: undefined | ((date: Date) => boolean) = isValid
): Date | undefined => {
  for (let fmt of formatStrings) {
    const parsed = parseDe(dateString, fmt, referenceDate, options);
    if (isValidExtended(parsed)) {
      return parsed;
    }
  }
  return undefined;
};

/**
 * This function parses german date strings like "01.02.2021", "1.2.21". If no year is supplied the reference date's year is assumed. To prevent accidents like setting the year to e.g. 221 instead of 2021 the date is only returned if it's after 01.01.1900 and before 01.01.2100.
 * @see dateInputFormatStrings for supported formats
 */
export const parseDateInputDe = (
  dateString: string,
  referenceDate: Date | number,
  options?: Parameters<typeof parse>[3]
): Date | undefined => {
  if (!/^\d{1,2}\.\d{1,2}\.(\d{2}|\d{4})?$/.test(dateString)) {
    return undefined;
  }
  const parsed = parseMultipleDe(
    dateString,
    ["dd.MM.yyyy", "dd.MM.yy", "dd.MM."],
    referenceDate,
    { useAdditionalWeekYearTokens: true, ...options },
    (date) =>
      isAfter(date, new Date(1900, 0, 1)) &&
      isBefore(date, new Date(2100, 0, 1))
  );
  return parsed;
};

export const combineDateAndTime = (date: Date, time: string) => {
  if (!/^\d{2}:\d{2}$/.test(time)) {
    throw new Error("invalid time format");
  }
  return parseDe(time, "HH:mm", parseIfString(date));
};

export const convertToMinutes = function (timeString: string) {
  const [hours, minutes] = timeString.split(":").map((t) => parseInt(t));
  return minutes + hours * 60;
};

export function formatDurationDe(
  duration: Parameters<typeof formatDuration>[0],
  options?: Parameters<typeof formatDuration>[1]
) {
  return formatDuration(duration, {
    locale: de,
    ...options,
  });
}
