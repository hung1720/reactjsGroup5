import React, { useEffect, useState } from "react";
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
import weekData from "cldr-core/supplemental/weekData.json";
import currencyData from "cldr-core/supplemental/currencyData.json";
import likelySubtags from "cldr-core/supplemental/likelySubtags.json";
import numbers from "cldr-numbers-full/main/es/numbers.json";
import dateFields from "cldr-dates-full/main/es/dateFields.json";
import currencies from "cldr-numbers-full/main/es/currencies.json";
import caGregorian from "cldr-dates-full/main/es/ca-gregorian.json";
import timeZoneNames from "cldr-dates-full/main/es/timeZoneNames.json";

import axios from "axios";
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
  const [posts, setPosts] = useState([]); // Get data lịch đã được mentor set sẵn

  useEffect(() => {
    axios
      .get("https://6331a1443ea4956cfb635d5f.mockapi.io/api/test/tableSlot")
      .then((res) => {
        setPosts(
          res.data.map((dataItem) => ({
            ...dataItem,
            Start: parseAdjust(dataItem.Start),
            End: parseAdjust(dataItem.End),
          }))
        );
      })
      .catch((err) => {
        console.log(err);
      });
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
      setPosts((old) =>
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
    [setPosts]
  );

  return (
    <>
      <LocalizationProvider language={locale.language}>
        <IntlProvider locale={locale.locale}>
          <Scheduler
            data={posts}
            onDataChange={handleDataChange}
            view={view}
            onViewChange={handleViewChange}
            date={date}
            onDateChange={handleDateChange}
            editable={true}
            timezone={timezone}
            modelFields={customModelFields}
          >
            {console.log(posts)}
            <TimelineView />
            <DayView />
            <WeekView />
            <MonthView />
            <AgendaView />
          </Scheduler>
        </IntlProvider>
      </LocalizationProvider>
    </>
  );
};

export default MentorSlotPageTable;
