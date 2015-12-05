const React = require('react');
const {Table} = require('fixed-data-table');

class MyTable extends React.Component {
  render() {
    return (
      <Table
        rowsCount={100}
        rowHeight={50}
        width={1000}
        height={500}>
        // TODO: Add columns
      </Table>
    );
  }
}



class MyTable extends React.Component {
  render() {
    return (
      <Table
        rowsCount={100}
        rowHeight={50}
        width={1000}
        height={500}>
        <Column
          cell={<Cell>Basic content</Cell>}
          width={200}
        />
      </Table>
    );
  }
}

// const React = require('react');
// const {Table, Column, Cell} = require('fixed-data-table');

class MyTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
 data1 = [
  {"domain":"mongodb.info","ip":"82.192.74.35","country":"NL"},
  {"domain":"udemy.com","ip":"190.93.242.22","country":"CR"},
  {"domain":"coursereport.com","ip":"204.236.232.83","country":"US"}}
];

let data2 = [
   {"rank":1,"name":"China","population":1373420000,"percent":18.9},
   {"rank":2,"name":"India","population":1280670000,"percent":17.6},
   {"rank":3,"name":"United States","population":322317000,"percent":4.42},
   {"rank":4,"name":"Indonesia","population":255461700,"percent":3.51},
   {"rank":5,"name":"Brazil","population":205252000,"percent":2.82}}
];
    };
  }

  render() {
    return (
      <Table
        rowsCount={this.state.myTableData.length}
        rowHeight={50}
        headerHeight={50}
        width={1000}
        height={500}>
        <Column
          header={<Cell>Name</Cell>}
          cell={props => (
            <Cell {...props}>
              {this.state.myTableData[props.rowIndex].name}
            </Cell>
          )}
          width={200}
        />
      </Table>
    );
  }
}