import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';

const Breadcrumbs = (props) => {
  const { id, username } = props;
  
  return (
    <React.Fragment>
      <Breadcrumb>
        <BreadcrumbItem href='/'>Home</BreadcrumbItem>
        <BreadcrumbItem href={'/user/' + id}>{username}</BreadcrumbItem>
        <BreadcrumbItem active href='#'>Comments</BreadcrumbItem>
      </Breadcrumb>
    </React.Fragment>
  )
}

export default Breadcrumbs;