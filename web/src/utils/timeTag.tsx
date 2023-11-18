export const timeTag = (datetime: string, dateOnly = false) => {
  console.log(datetime, dateOnly)
  const datevariable = !dateOnly
    ? new Date(datetime).toLocaleString()
    : new Date(datetime).toLocaleDateString()
  return (
    <time dateTime={datetime} title={datetime}>
      {datevariable}
    </time>
  )
}
