import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';

const Breadcrumbs = (props) => {
  const { id, username, label } = props;
  
  return (
    <React.Fragment>
      <Breadcrumb>
        <BreadcrumbItem href='/'>Home</BreadcrumbItem>
        <BreadcrumbItem href={'/user/' + id}>{username}</BreadcrumbItem>
        <BreadcrumbItem active href='#'>{label}</BreadcrumbItem>
      </Breadcrumb>
    </React.Fragment>
  )
}

export default Breadcrumbs;