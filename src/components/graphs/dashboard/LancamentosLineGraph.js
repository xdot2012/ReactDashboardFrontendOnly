// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from '@nivo/line'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

export default function LancamentosLineGraph() {
    const data = [{
          "id": "Saídas",
          "color": "hsl(208, 100%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 50
            },
            {
              "x": "helicopter",
              "y": 295
            },
            {
              "x": "boat",
              "y": 272
            },
            {
              "x": "train",
              "y": 110
            },
            {
              "x": "subway",
              "y": 153
            },
            {
              "x": "bus",
              "y": 191
            },
            {
              "x": "car",
              "y": 210
            },
            {
              "x": "moto",
              "y": 51
            },
            {
              "x": "bicycle",
              "y": 116
            },
            {
              "x": "horse",
              "y": 207
            },
            {
              "x": "skateboard",
              "y": 33
            },
            {
              "x": "others",
              "y": 205
            }
          ]
        },
        {
          "id": "Entradas",
          "color": "hsl(73, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 500
            },
            {
              "x": "helicopter",
              "y": 131
            },
            {
              "x": "boat",
              "y": 125
            },
            {
              "x": "train",
              "y": 140
            },
            {
              "x": "subway",
              "y": 255
            },
            {
              "x": "bus",
              "y": 79
            },
            {
              "x": "car",
              "y": 260
            },
            {
              "x": "moto",
              "y": 119
            },
            {
              "x": "bicycle",
              "y": 10
            },
            {
              "x": "horse",
              "y": 146
            },
            {
              "x": "skateboard",
              "y": 104
            },
            {
              "x": "others",
              "y": 234
            }
          ]
        },
      ]
    return (
     <MyResponsiveLine data={data} />
    );
}


const MyResponsiveLine = ({ data /* see data tab */ }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableArea={true}
        colors={{ scheme: 'set1' }}
        areaBlendMode="difference"
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)