import { ColorSchemeName, Insets } from "react-native"
import { arabic } from "src/assets/locales/ar/common-ar";
import moment from "moment";
import 'moment/locale/ar';
import { decode } from "html-entities";
import DeviceInfo from 'react-native-device-info';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export enum DateIcon {
  CLOCK,
  CALENDAR
}

export const VALID_URL_REGEX = "((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)"

export interface CustomAlertProps {
  title?: string;
  message?: string;
  delay?: number;
  buttonTitle?: string;
  onPress?: () => void
}

export const isDarkTheme = (colorScheme: ColorSchemeName) => {
  return colorScheme == Theme.DARK;
};

export const testProps = (testID: string | undefined) => {
  return { testID: testID, accessibilityLabel: testID };
};

export const DEFAULT_HIT_SLOP: Insets = { top: 10, bottom: 10, left: 10, right: 10 }

export const decodeHTMLTags = (description: string): string => {
  const regex = /(<([^>]+)>)/gi; // to find the html tags in the description ex: <p>, <br>, etc.,
  const dataInfo = isNotEmpty(description) ? description.replace(regex, '').trim() : '';
  return isNotEmpty(dataInfo) ? decode(dataInfo.trim()) : ''
};

export const isNonEmptyArray = (data: any): boolean => {
  return data && Array.isArray(data) && data.length > 0;
};

export const isInvalidOrEmptyArray = (data: any): boolean => {
  return !data || !Array.isArray(data) || data.length == 0;
};

export const isObjectNonEmpty = (data: any): boolean => {
  return data && Object.keys(data).length > 0 ? true : false;
};

export const isNotEmpty = (value: string | null | undefined): boolean => {
  return typeof value === 'string' && value.trim().length > 0;
};

export const joinArray = (data: any, joinKey: string = ','): string => {
  return isNonEmptyArray(data) ? data.join(joinKey) : ''
}

export const isValidHttpUrl = (url: string): boolean => {
  const pattern = new RegExp(VALID_URL_REGEX);
  return isNotEmpty(url) ? pattern.test(url) : false;
};

export const spliceArray = (data: any, start: number, count: number): any[] => {
  return isNonEmptyArray(data) ? data.splice(start, count) : []
}

export const isNonNegativeNumber = (data: any): boolean => {
  return !isNaN(data) && typeof data === 'number' && data >= 0 ? true : false
}

export const isArray = (data: any) => data && Array.isArray(data) ? true : false

export const isStringIncludes = (data: any, searchText: string): boolean => {
  return isNotEmpty(data) && data.includes(searchText) ? true : false
}

export const timeAgo = (time: any) => {
  var date = new Date(time);
  var today = new Date();
  var threeHoursBefore = new Date(today.valueOf() - 1000 * 60 * 60 * 3);
  const isToday = date.getDate() == today.getDate() && date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear();
  const isThreeHoursAgo = date.getHours() - threeHoursBefore.getHours() >= 3;
  const fullDateFormat = arabic.months[moment(time).get('month')] + ' ' + calculateDate(time) + ', ' + calculateYear(time);
  const recentHoursFormat = arabic.timeSince.since + moment().fromNow(true);
  if (isToday && isThreeHoursAgo) {
    return recentHoursFormat;
  } else {
    return fullDateFormat;
  }
};

export type DateTimeAgoType = {
  icon: DateIcon,
  time: string
}

export const dateTimeAgo = (time: any): DateTimeAgoType => {
  var today = new Date();

  var startTime = moment(time).format();
  var endTime = moment(today).format();

  var duration = moment.duration(moment(endTime).diff(startTime));
  var minutes = Number((duration.asMinutes()).toFixed(0));

  const isLessThanHour = minutes < 60;
  const isLessThanTwoHours = minutes < 120;
  const isLessThanThreeHours = minutes < 180;
  const isLessThanFourHours = minutes < 240;

  if (isLessThanFourHours) {
    if (isLessThanHour) {
      return { icon: DateIcon.CLOCK, time: `${arabic.timeSince.since} ${JSON.stringify(minutes)} ${arabic.timeSince.minute}` }
    } else if (isLessThanTwoHours) {
      return { icon: DateIcon.CLOCK, time: arabic.timeSince.fromHour }
    } else if (isLessThanThreeHours) {
      return { icon: DateIcon.CLOCK, time: arabic.timeSince.fromTwoHours }
    } if (isLessThanFourHours) {
      return { icon: DateIcon.CLOCK, time: arabic.timeSince.fromThreeHours }
    }
  }

  const day = calculateDay(time)
  const dayString = arabic.day[day] + ' '
  const hourValue = calculateHour(time)
  const hourString = hourValue < 10 ? '0' + hourValue : hourValue
  const minuteValue = calculateMinutes(time)
  const minuteString = minuteValue < 10 ? '0' + minuteValue : minuteValue

  const timeAgoFormatInfo = `${calculateDateNumber(time)}/${calculateMothNumber(time)} ${hourString}:${minuteString}`
  const fullDateFormat = (dayString + timeAgoFormatInfo).toString();
  return { icon: DateIcon.CALENDAR, time: fullDateFormat }
};

export const calculateDay = (time: any) => {
  return moment(time).get('day');
};

export const calculateHour = (time: any) => {
  return moment(time).utcOffset(time).get('hours');
};

export const calculateMinutes = (time: any) => {
  return moment(time).utcOffset(time).get('minutes');
};

export const calculateDateNumber = (time: any) => {
  const date = calculateDate(time)
  return date < 10 ? '0' + date : date;
};

export const calculateMothNumber = (time: any) => {
  const month = moment(time).get('months') + 1
  return month < 10 ? '0' + month : month;
};

export const calculateDate = (time: any) => {
  return moment(time).get('date');
};

export const calculateMonth = (time: any) => {
  return arabic.months[moment(time).get('month')];;
};

export const calculateYear = (time: any) => {
  return moment(time).get('year');
};

export const getFullDate = (time: any) => {
  return calculateDate(time) + ' ' + calculateMonth(time) + ' ' + moment(time).get('year');
}

export const getFormattedDate = (time: any) => {
  const year = calculateYear(time)
  const monthValue = moment(time).get('month') + 1
  const month = monthValue < 10 ? '0' + monthValue : monthValue
  const dateValue = calculateDate(time);
  const date = dateValue < 10 ? '0' + dateValue : dateValue
  return year + '-' + month + '-' + date
}

export const getPodcastDate = (time: any) => {
  return isNotEmpty(time) ? calculateMonth(time) + ', ' + calculateDate(time) + ' ' + calculateMonth(time) : " "
}

export const getSecondsToHms = (time: any): string => {
  time = Number(time);
  var h = Math.floor(time / 3600);
  var m = Math.floor(time % 3600 / 60);
  var s = Math.floor(time % 3600 % 60);

  var secondsDisplay = s > 0 ? s : "";
  var minutesDisplay = (m > 0) ? (secondsDisplay > 0) ? m < 10 ? '0' + m.toString() + ":" : m.toString() + ":" : m.toString() : "";
  var hoursDisplay = h > 0 ? m > 0 ? h.toString() + ":" : h.toString() : "";
  return hoursDisplay + minutesDisplay + secondsDisplay;
}

export const getUpdatedObject = (obj: any, key: string, val: any, newVal: any) => {
  var newValue = newVal;
  var objects: any = [];
  for (var i in obj) {
    if (!obj.hasOwnProperty(i)) {
      continue;
    }
    if (typeof obj[i] == 'object') {
      objects = objects.concat(getUpdatedObject(obj[i], key, val, newValue));
    } else if (i == key && obj[key] == val) {
      obj[key] = newValue;
    }
  }
  return obj;
}

export const convertSecondsToHMS = (seconds: number | string) => {
  seconds = Number(seconds);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor((seconds % 3600) % 60);

  const hrs = h > 0 ? (h < 10 ? `0${h}:` : `${h}:`) : '';
  const mins = m > 0 ? (m < 10 ? `0${m}:` : `${m}:`) : '00:';
  const scnds = s > 0 ? (s < 10 ? `0${s}` : s) : '00';
  return `${hrs}${mins}${scnds}`;
};

export const removeWhiteSpace = (value: string): string | any => {
  return typeof value === 'string' ? value.trim() : value;
}


export const getDeviceName = async () => {
  const deviceName = await DeviceInfo.getDeviceName();
  return deviceName
};

export const getConvertedTime = (time?: number, timezone?: number) => {
  moment.locale('en')
  if (time && timezone) {
    const offsetTimezone = (timezone).toString();
    const timeWeatherSunriseData = new Date(time * 1000);
    const countrySpecificTimeSunrise = moment(new Date(timeWeatherSunriseData)).utcOffset(offsetTimezone).format('ddd MMM D Y hh:mm:ss A ')
    const convertedCountrySpecificTime = moment(new Date(countrySpecificTimeSunrise)).format('HH:mm:ss')
    return convertedCountrySpecificTime
  } else {
    return ''
  }
};

export const isValidDate = (dateObject: any): boolean => {
  return dateObject && new Date(dateObject).toString() !== 'Invalid Date';
}
