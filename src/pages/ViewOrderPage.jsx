
import { Button, Col, Divider, Row, Table } from "antd";
import SearchBar from "./components/SearchBar";
import {
    DownOutlined,
    EllipsisOutlined,
    ExportOutlined,
    HourglassTwoTone,
    RightOutlined
} from '@ant-design/icons';


// import orderlist from "./dummy_order.json"
import { useState } from "react";

const columns = [
    {
        title: 'Account',
        dataIndex: 'account',
        key: 'account',
        render: (text) => (
            <span style={{ color: 'var(--primary-text-color)', fontWeight: 700 }}>{text}</span>
        )
    },
    {
        title: 'Operation',
        dataIndex: 'operation',
        key: 'operation',
    },
    {
        title: 'Symbol',
        dataIndex: 'symbol',
        key: 'symbol',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Qty.',
        dataIndex: 'qty',
        key: 'qty',
    },
    {
        title: 'Filled Qty',
        dataIndex: 'filledQty',
        key: 'filledQty',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (text) => (
            <span><Button shape="circle" size="small" icon={<HourglassTwoTone />}></Button> {text}</span>
        )
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Expiration',
        dataIndex: 'expiration',
        key: 'expiration',
    },
    {
        title: 'No. Ref.',
        dataIndex: 'noOfRef',
        key: 'noOfRef',
    },
    {
        title: 'Ext. Ref.',
        dataIndex: 'extRef',
        key: 'extRef',
        render: (text) => (
            <span>{text}&nbsp;<Button shape="circle" size="small" icon={<EllipsisOutlined />} /></span>
        )
    },
];


function ViewOrderPage() {

    const [tradeList, setTradeList] = useState();

    const handleTradeList = (data) => {
        setTradeList(data);
    };

    return (
        <div>
            <SearchBar handleTradeList={handleTradeList} />
            <Table dataSource={tradeList} columns={columns} rowKey="account" scroll expandable={{
                expandedRowRender: (record) => (
                    expandFunction(record)
                ),
                rowExpandable: (record) => record != null,
                expandIcon: ({ expanded, onExpand, record }) =>
                    expanded ? (
                        <DownOutlined onClick={e => onExpand(record, e)} />
                    ) : (
                        <RightOutlined onClick={e => onExpand(record, e)} />
                    ),
            }}>

            </Table>
        </div>
    )

}

export default ViewOrderPage;

function expandFunction(record) {
    return <div
        style={{
            margin: 0,
            paddingLeft: 15,
            paddingRight: 15
        }}
    >
        <Row gutter={[0, 10]}>
            <Col xs={24} md={6}>
                <span style={{ color: 'var(--primary-text-color)', fontWeight: 700 }}>FIRST-NAME LAST-NAME (10103ZA - US margin)</span>
            </Col>
            <Col xs={24} md={13}>
                <Button style={{ color: "var(--button-dark-text-color)" }} shape="round" iconPosition="end" icon={<ExportOutlined />}>Full review details</Button>
            </Col>
            <Col xs={14} md={4}>
                <Button style={{ paddingLeft: 23, paddingRight: 23 }} type="primary" shape="round" >Accept</Button>
                <Button style={{ marginLeft: 5, paddingLeft: 23, paddingRight: 23 }} danger shape="round" iconPosition="end" icon={<DownOutlined />}>Reject</Button>
            </Col>
        </Row>
        <Divider style={{ margin: 4 }} />
        <Row style={{ marginTop: 4 }}>
            <Col xs={12} sm={12} md={6}>
                Net Amount: &nbsp;<span style={{ fontWeight: 700 }}>{record.netAmount}</span>
            </Col>
            <Col xs={12} sm={12} md={6}>
                Price: &nbsp;<span style={{ fontWeight: 700 }}>{record.price}</span>
            </Col>
            <Col xs={12} sm={12} md={6}>
                Exchange Rate: &nbsp;<span style={{ fontWeight: 700 }}>{record.exchangeRate}</span>
            </Col>
            <Col xs={12} sm={12} md={6}>
                O/S Limit: &nbsp;<span style={{ fontWeight: 700 }}>{record.osLimit}</span>
            </Col>
        </Row>
        <Row style={{ marginTop: 10 }}>
            <Col xs={12} sm={12} md={6}>
                Reference Number: &nbsp;<span style={{ fontWeight: 700 }}>{record.noOfRef}</span>
            </Col>
            <Col xs={12} sm={12} md={6}>
                Date / Time: &nbsp;<span style={{ fontWeight: 700 }}>{record.date}</span>
            </Col>
            <Col xs={12} sm={12} md={6}>
                Telephone: &nbsp;<span style={{ fontWeight: 700 }}>{record.telephone}</span>
            </Col>
            <Col xs={12} sm={12} md={6}>
                UserId: &nbsp;<span style={{ fontWeight: 700 }}>{record.userId}</span>
            </Col>
        </Row>
        <div style={{ background: "var(--grey-background-color)", margin: 0, padding: 12 }}>
            <h4 style={{ color: "var(--darkblue-text-color)" }}>Warning(s)</h4>
            <ul>
                <li>To trade this security in this account, a currency conversion will be made at the current rate.</li>
                <li>A similar order has already been submitted.</li>
                <li>Your transaction will be processed the following business day.</li>
                <li>It is not possible to calculate the buying power of this order.</li>
                <li>A cancellation will not be possible during business hours on market orders. You can call a representative for more information.</li>
                <li>For the above-mentioned reason(s), your order will be processed by one of our representatives.</li>
            </ul>
        </div>


    </div>;
}
