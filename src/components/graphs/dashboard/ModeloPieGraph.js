import { ResponsivePie } from '@nivo/pie'


export default function ModeloPieGraph() {
    const data = [
        {
          "id": "despesas",
          "label": "Despesas",
          "value": 50,
          "color": "hsl(208, 100%, 50%)"
        },
        {
          "id": "hobbies",
          "label": "Hobbies",
          "value": 30,
          "color": "hsl(134, 59%, 72%)"
        },
        {
          "id": "poupar",
          "label": "Poupar",
          "value": 20,
          "color": "hsl(51, 100%, 73%)"
        },
      ]
    
  
    return ( <MyResponsivePie data={data} /> );
  }
  
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsivePie = ({ data /* see data tab */ }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ datum: 'data.color' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)
