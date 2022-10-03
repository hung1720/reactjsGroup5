import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { guid } from "@progress/kendo-react-common";
import { timezoneNames } from "@progress/kendo-date-math";
import {
  IntlProvider,
  load,
  LocalizationProvider,
} from "@progress/kendo-react-intl";
import {
  Scheduler,
  TimelineView,
  DayView,
  WeekView,
  MonthView,
  AgendaView,
} from "@progress/kendo-react-scheduler";
// import "@progress/kendo-date-math/tz/Etc/UTC";
// import "@progress/kendo-date-math/tz/Europe/Sofia";
// import "@progress/kendo-date-math/tz/Europe/Madrid";
// import "@progress/kendo-date-math/tz/Asia/Dubai";
// import "@progress/kendo-date-math/tz/Asia/Tokyo";
// import "@progress/kendo-date-math/tz/America/New_York";
// import "@progress/kendo-date-math/tz/America/Los_Angeles";
import weekData from "cldr-core/supplemental/weekData.json";
import currencyData from "cldr-core/supplemental/currencyData.json";
import likelySubtags from "cldr-core/supplemental/likelySubtags.json";
import numbers from "cldr-numbers-full/main/es/numbers.json";
import dateFields from "cldr-dates-full/main/es/dateFields.json";
import currencies from "cldr-numbers-full/main/es/currencies.json";
import caGregorian from "cldr-dates-full/main/es/ca-gregorian.json";
import timeZoneNames from "cldr-dates-full/main/es/timeZoneNames.json";
import { getPosts } from "components/MentorSlotPage/MentorSlotPageTableSlice.js";

load(
  likelySubtags,
  currencyData,
  weekData,
  numbers,
  currencies,
  caGregorian,
  dateFields,
  timeZoneNames
);

const MentorSlotPageTable = () => {
  const { posts, loading } = useSelector((state) => state.post); // Du lieu dang array
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const customModelFields = {
    id: "TaskID",
    title: "Title",
    description: "Description",
    start: "Start",
    end: "End",
    recurrenceRule: "RecurrenceRule",
    recurrenceId: "RecurrenceID",
    recurrenceExceptions: "RecurrenceException",
  };
  const currentYear = new Date().getFullYear();

  const parseAdjust = (eventDate) => {
    const date = new Date(eventDate);
    date.setFullYear(currentYear);
    return date;
  };

  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const displayDate = new Date(Date.UTC(currentYear, 5, 24));

  const sampleDataWithCustomSchema = posts.map((dataItem) => ({
    ...dataItem,
    Start: parseAdjust(dataItem.Start),
    End: parseAdjust(dataItem.End),
    PersonIDs: randomInt(1, 2),
    RoomID: randomInt(1, 2),
  }));

  const timezones = React.useMemo(() => timezoneNames(), []);
  const locales = [
    {
      language: "en-US",
      locale: "en",
    },
    {
      language: "es-ES",
      locale: "es",
    },
  ];
  const [view, setView] = React.useState("day");
  const [date, setDate] = React.useState(displayDate);
  const [locale, setLocale] = React.useState(locales[0]);
  const [timezone, setTimezone] = React.useState("Etc/UTC");
  const [orientation, setOrientation] = React.useState("horizontal");
  const [data, setData] = React.useState(sampleDataWithCustomSchema);
  ///

  ///
  const handleViewChange = React.useCallback(
    (event) => {
      setView(event.value);
    },
    [setView]
  );
  const handleDateChange = React.useCallback(
    (event) => {
      setDate(event.value);
    },
    [setDate]
  );
  const handleLocaleChange = React.useCallback(
    (event) => {
      setLocale(event.target.value);
    },
    [setLocale]
  );
  const handleTimezoneChange = React.useCallback(
    (event) => {
      setTimezone(event.target.value);
    },
    [setTimezone]
  );
  const handleOrientationChange = React.useCallback((event) => {
    setOrientation(event.target.getAttribute("data-orientation"));
  }, []);
  const handleDataChange = React.useCallback(
    ({ created, updated, deleted }) => {
      setData((old) =>
        old
          .filter(
            (item) =>
              deleted.find((current) => current.TaskID === item.TaskID) ===
              undefined
          )
          .map(
            (item) =>
              updated.find((current) => current.TaskID === item.TaskID) || item
          )
          .concat(
            created.map((item) =>
              Object.assign({}, item, {
                TaskID: guid(),
              })
            )
          )
      );
    },
    [setData]
  );
  return (
    <div>
      <LocalizationProvider language={locale.language}>
        <IntlProvider locale={locale.locale}>
          <Scheduler
            data={sampleDataWithCustomSchema}
            onDataChange={handleDataChange}
            view={view}
            onViewChange={handleViewChange}
            date={date}
            onDateChange={handleDateChange}
            editable={true}
            timezone={timezone}
            modelFields={customModelFields}
            group={{
              resources: ["Rooms", "Persons"],
              orientation,
            }}
          >
            <TimelineView />
            <DayView />
            <WeekView />
            <MonthView />
            <AgendaView />
          </Scheduler>
        </IntlProvider>
      </LocalizationProvider>
      {console.log(sampleDataWithCustomSchema)}
    </div>
  );
};

export default MentorSlotPageTable;
