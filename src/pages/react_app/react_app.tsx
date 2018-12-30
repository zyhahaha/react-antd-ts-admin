// import { Divider, Table, Tag } from 'antd';
import { Table, Divider } from 'antd';
import * as React from 'react';
import axios from 'axios';

const { Column } = Table;

// const data = [{
//   key: '1',
//   firstName: 'John',
//   lastName: 'Brown',
//   age: 32,
//   address: 'New York No. 1 Lake Park',
//   tags: ['nice', 'developer'],
// }, {
//   key: '2',
//   firstName: 'Jim',
//   lastName: 'Green',
//   age: 42,
//   address: 'London No. 1 Lake Park',
//   tags: ['loser'],
// }, {
//   key: '3',
//   firstName: 'Joe',
//   lastName: 'Black',
//   age: 32,
//   address: 'Sidney No. 1 Lake Park',
//   tags: ['cool', 'teacher'],
// }];

// function tagsHandle (tags: string[]) {
//   return (
//     <span>
//       {tags.map((tag: string) => <Tag color="blue" key={tag}>{tag}</Tag>)}
//     </span>
//   )
// }

interface IrecordType {
  lastName: string,
}
function recordHandle (record: IrecordType) {
  return (
    <span>
      <a href="javascript:;">Invite {record.lastName}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
  )
}
interface ITest {
  title: string,
  content: string,
  coach: string
}
// interface IList {
//   list: Array<object>;
// }

interface IContentData {
  list: ITest[]
}

interface IState {
  homeContentData: IContentData,
}

class TableTest extends React.Component {

  public state: IState = {
    homeContentData: {
      list: [
        {
          title: '',
          content: '',
          coach: ''
        }
      ]
    }
  }

  constructor(props: object) {
    super(props);
    this.getHomeContentData();
  }
  
  // private infoData: object = {};
  // interface IState = {
  //   homeContentData: Array,
  // }
  // public state: object<object> = {};
  // public state: IState = {
  //   homeContentData: {
  //     list: [
  //       {
  //         title: '',
  //         content: '',
  //         coach: ''
  //       }
  //     ]
  //   }
  // }

  public getHomeContentData() {
    axios.get('http://localhost:8088/homeContentData').then(res => {
      const homeContentData = res.data.data;
        this.setState({
          homeContentData
        })
      });
  }

  public render() {
    // this.state = {
    //   homeContentData: {
    //     list: []
    //   }
    // };
    return (
      <Table dataSource = { this.state.homeContentData.list } >
        {/* <ColumnGroup title="Name">
          <Column
            title="First Name"
            dataIndex="firstName"
            key="firstName"
          />
          <Column
            title="Last Name"
            dataIndex="lastName"
            key="lastName"
          />
        </ColumnGroup> */}
        <Column
          title="Title"
          dataIndex="title"
          key="title"
        />
        <Column
          title="Content"
          dataIndex="content"
          key="content"
        />
        <Column
          title="Coach"
          dataIndex="coach"
          key="coach"
        />
        {/* <Column
          title="Tags"
          dataIndex="coach"
          key="coach"
          render={tagsHandle}
        /> */}
        <Column
          title="Action"
          key="action"
          render={recordHandle}
        />
      </Table>
    );
  }
}

export default TableTest;
