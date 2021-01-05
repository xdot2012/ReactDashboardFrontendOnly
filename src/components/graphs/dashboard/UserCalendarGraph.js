// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/calendar
import { ResponsiveCalendar } from '@nivo/calendar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

export default function UserCalendarGraph() {

    const data = [
        {
        "day": "2021-10-15",
        "value": 172
        },
        {
        "day": "2021-01-11",
        "value": 115
        },
        {
        "day": "2021-06-28",
        "value": 70
        },
        {
        "day": "2021-11-23",
        "value": 316
        },
        {
        "day": "2021-01-30",
        "value": 296
        },
        {
        "day": "2021-01-09",
        "value": 152
        },
        {
        "day": "2021-09-17",
        "value": 123
        },
        {
        "day": "2021-05-31",
        "value": 221
        },
        {
        "day": "2021-11-07",
        "value": 160
        },
        {
        "day": "2021-12-03",
        "value": 341
        },
        {
        "day": "2021-05-13",
        "value": 177
        },
        {
        "day": "2021-11-08",
        "value": 300
        },
        {
        "day": "2021-08-16",
        "value": 223
        },
        {
        "day": "2021-12-11",
        "value": 249
        },
        {
        "day": "2021-04-09",
        "value": 267
        },
        {
        "day": "2021-11-16",
        "value": 370
        },
        {
        "day": "2021-05-02",
        "value": 196
        },
        {
        "day": "2021-01-17",
        "value": 386
        },
        {
        "day": "2021-04-02",
        "value": 290
        },
        {
        "day": "2021-01-30",
        "value": 20
        },
        {
        "day": "2021-05-29",
        "value": 221
        },
        {
        "day": "2021-06-01",
        "value": 380
        },
        {
        "day": "2021-11-28",
        "value": 374
        },
        {
        "day": "2021-01-13",
        "value": 252
        },
        {
        "day": "2021-09-28",
        "value": 312
        },
        {
        "day": "2021-10-29",
        "value": 280
        },
        {
        "day": "2021-06-18",
        "value": 97
        },
        {
        "day": "2021-05-16",
        "value": 139
        },
        {
        "day": "2021-06-27",
        "value": 179
        },
        {
        "day": "2021-11-11",
        "value": 312
        },
        {
        "day": "2021-08-15",
        "value": 333
        },
        {
        "day": "2021-02-07",
        "value": 149
        },
        {
        "day": "2021-08-24",
        "value": 337
        },
        {
        "day": "2021-07-05",
        "value": 186
        },
        {
        "day": "2021-11-15",
        "value": 129
        },
        {
        "day": "2021-09-26",
        "value": 44
        },
        {
        "day": "2021-06-18",
        "value": 248
        },
        {
        "day": "2021-03-23",
        "value": 375
        },
        {
        "day": "2021-07-28",
        "value": 235
        },
        {
        "day": "2021-11-28",
        "value": 36
        },
        {
        "day": "2021-08-06",
        "value": 222
        },
        {
        "day": "2021-09-27",
        "value": 169
        },
        {
        "day": "2021-05-31",
        "value": 361
        },
        {
        "day": "2021-01-01",
        "value": 262
        },
        {
        "day": "2021-07-02",
        "value": 268
        },
        {
        "day": "2021-07-27",
        "value": 282
        },
        {
        "day": "2021-03-06",
        "value": 104
        },
        {
        "day": "2021-06-21",
        "value": 379
        },
        {
        "day": "2021-07-17",
        "value": 99
        },
        {
        "day": "2021-04-09",
        "value": 388
        },
        {
        "day": "2021-04-21",
        "value": 47
        },
        {
        "day": "2021-02-24",
        "value": 55
        },
        {
        "day": "2021-11-12",
        "value": 187
        },
        {
        "day": "2021-11-14",
        "value": 235
        },
    ]
    return (
        <MyResponsiveCalendar data={data} />
    );
}

const MyResponsiveCalendar = ({ data /* see data tab */ }) => (
    <ResponsiveCalendar
        data={data}
        from="2021-03-01"
        to="2021-07-12"
        emptyColor="#eeeeee"
        colors={[ '#84c5f0', '#3b8bbf', '#195d8a', '#043657' ]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
)