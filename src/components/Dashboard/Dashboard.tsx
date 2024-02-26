import React, { FC, Fragment } from 'react';
import PageHeader from '../../layout/Header/pageheader';
import { Button, Card, Col, ProgressBar, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ImagesData } from '../../commoncomponents/Images/CommonImages';
interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  //TOP PRODUCTS
interface Product1 {
  id: number
  main: string
  heading: string
  class: string
  class1: string
  class2: string
  class3: string
  src1: string
  color: string
}
 const products1: Product1[]=[
  {id:1, main:'1', heading:'Books', class:'Book', class1:'$1234', class2:'3 days ago', class3:'Regular', src1:ImagesData('products16'), color:'success'},
  {id:2, main:'2', heading:'Sports', class:'Shoes', class1:'$5436', class2:'1hr ago', class3:'Top Seller', src1:ImagesData('products14'), color:'info'},
  {id:3, main:'3', heading:'Accesories', class:'Watch', class1:'$540', class2:'1 week ago', class3:'Irregular', src1:ImagesData('products15'), color:'danger'},
  {id:4, main:'4', heading:'Watches', class:'Smart Watch', class1:'$1543', class2:'Today', class3:'Regular', src1:ImagesData('products13'), color:'success'},
  {id:5, main:'5', heading:'speakers', class:'Head set', class1:'$6427', class2:'Today', class3:'Top Pick', src1:ImagesData('products18'), color:'info'},
]
  return(

  <Fragment>
      <PageHeader  title="Dashboard" />
      <Row>
        <Col md={12} sm={12} lg={12} xl={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                Top Products
              </Card.Title>
              <div className="card-options">
                <Button href="#" className="btn btn-s" variant='primary'>View All</Button>
              </div>
            </Card.Header>
            <Card.Body className=" p-0 py-2">
              <div className="table-responsive">
                <Table className="table table-hover card-table table-vcenter text-nowrap">
                  <thead className="border-bottom-0 pt-3 pb-3">
                    <tr>
                      <th className="text-center">s.no</th>
                      <th>Product Category</th>
                      <th>Product Name</th>
                      <th>Sale Value</th>
                      <th>Sale Info</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products1.map((Product1)=>(
                    <tr key={Math.random()}>
                      <td className="text-center">{Product1.main}</td>
                      <td><img className="avatat avatar-md brround me-2"
                       src={Product1.src1} alt="" />{Product1.heading}
                      </td>
                      <td className={`fs-13 text-${Product1.color}`}><span
                        className={`dot-label bg-${Product1.color} me-2 w-2 h-2`}></span>{Product1.class}
                      </td>
                      <td><span className="font-weight-normal1">{Product1.class1}</span></td>
                      <td className="text-muted">{Product1.class2}</td>
                      <td><span
                        className={`badge fs-11 bg-${Product1.color}-transparent text-success ms-21`}>{Product1.class3}</span>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
  </Fragment>
)
};

export default Dashboard;
