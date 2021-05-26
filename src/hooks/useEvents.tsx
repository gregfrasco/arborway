import { EventProps } from 'components/event-card/event';
import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import diff from 'date-fns/differenceInCalendarDays';
const SPREADSHEET_ID = '1__G_C1IX_gRVMA-zFaUMtFOGPTQpeFLonTYuOI8wjWo';
const KEY = process.env.EVENTS_KEY;

export interface EventContextProps {
  loading: boolean;
  events: EventProps[];
}

const EventContext = createContext({} as EventContextProps);

const transform = (event: string[]): EventProps => {
  return {
    date: event[0] !== '' ? new Date(event[0]) : undefined,
    title: event[1],
    linkTitle: event[2],
    link: event[3]
  };
};

const EventProvider: FC = (props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [events, setEvents] = useState<EventProps[]>([{}, {}]);

  useEffect(() => {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1!A2:D5?key=${KEY}`)
      .then((response) => response.json())
      .then((results) => {
        setEvents(
          results.values.map(transform).filter((event: EventProps) => {
            if (!event.date) {
              return true;
            }
            return diff(event.date, new Date()) >= -7;
          })
        );
        setLoading(false);
      });
  }, []);
  return <EventContext.Provider value={{ loading, events }} {...props} />;
};

const useEvents = () => useContext(EventContext);

export { useEvents, EventProvider };
