import {PlatformStateContext} from 'nr1'

const MINUTE = 60*1000

function getTimeRangeNrql({beginTime, endTime, duration}) {
  if(beginTime && endTime) {
    return `SINCE ${beginTime} UNTIL ${endTime}`
  }
  else {
    return `SINCE ${duration/MINUTE} minutes ago`
  }
}

export default function TimeRangeContext(props) {
  return <PlatformStateContext.Consumer>
    {(platformState => {
      const {timeRange} = platformState
      const timeRangeNrql = getTimeRangeNrql(timeRange)

      return props.children({timeRange, timeRangeNrql})
    })}

  </PlatformStateContext.Consumer>
}
