import React from 'react'

const Timetable =(props)=> {
    return (<table className="table table-bordered tableR">
    <thead>
      <tr>
        <th className='text-center'>Time</th>
        <th className='text-center'>Monday</th>
        <th className='text-center'>Tuesday</th>
        <th className='text-center'>Wednesday</th>
        <th className='text-center'>Thursday</th>
        <th className='text-center'>Friday</th>
        <th className='text-center'>Saturday</th>
        <th className='text-center'>Sunday</th>
      </tr>
    </thead>
    <tbody>
      {props.tableData.map((val, key) => {
        return (
          <tr key={key}>
            <td className="col1">{val.time}</td>
            <td>{val.m.e}<br/><span className="text-muted">{val.m.t}</span></td>
            <td>{val.tu.e}<br/><span className="text-muted">{val.tu.t} </span></td>
            <td>{val.w.e}<br/><span className="text-muted">{val.w.t}</span></td>
            <td>{val.th.e}<br/><span className="text-muted">{val.th.t}</span></td>
            <td>{val.f.e}<br/><span className="text-muted">{val.f.t}</span></td>
            <td>{val.sa.e}<br/><span className="text-muted">{val.sa.t}</span></td>
            <td>{val.su.e}<br/><span className="text-muted">{val.su.t}</span></td>
          </tr>
        )
      })}
    </tbody>
  </table>)
}

export default Timetable;