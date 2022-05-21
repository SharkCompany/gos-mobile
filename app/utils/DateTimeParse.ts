import { FixMeLater } from "interfaces/migration";
import "dayjs/locale/vi";

import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.extend(isToday);
dayjs.locale("vi");

export const DateToDateTimeString = (time: FixMeLater) => {
	return dayjs(time).format("D MMMM, YYYY HH:mm");
};
