import React, {Component} from 'react'

class Table extends Component {
  render(){
    return (    
     <div class="row">
     <div class="col-xs-12">
     <div class="box">
     <div class="box-header">
     <h3 class="box-title">Responsive Hover Table</h3>

     </div>
     
     <div class="box-body table-responsive no-padding">
     <table class="table table-hover">
     <tr>
     <th>ID</th>
     <th>User</th>
     <th>Date</th>
     <th>Status</th>
     <th>Reason</th>
     </tr>
     <tr>
     <td>183</td>
     <td>John Doe</td>
     <td>11-7-2014</td>
     <td><span class="label label-success">Approved</span></td>
     <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
     </tr>
     <tr>
     <td>219</td>
     <td>Alexander Pierce</td>
     <td>11-7-2014</td>
     <td><span class="label label-warning">Pending</span></td>
     <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
     </tr>
     <tr>
     <td>657</td>
     <td>Bob Doe</td>
     <td>11-7-2014</td>
     <td><span class="label label-primary">Approved</span></td>
     <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
     </tr>
     <tr>
     <td>175</td>
     <td>Mike Doe</td>
     <td>11-7-2014</td>
     <td><span class="label label-danger">Denied</span></td>
     <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
     </tr>
     </table>
     </div>
     
     </div>
     
     </div>
     </div>
     )   
  }

}

export default Table