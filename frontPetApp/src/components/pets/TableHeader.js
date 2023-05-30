import React, {memo} from "react";
import classes from './TableHeader.module.css';

const TableHeader = memo(() => (
    <thead>
       <tr className={classes.tableHeaderRow}>
      <th className={classes.th}>Name</th>
      <th className={classes.th}>Age(in months)</th>
      <th className={classes.th}>Vaccinated</th>
      <th className={classes.th}>Gender</th>
      <th className={classes.th}>Weight</th>
      <th className={classes.th}>Description</th>
      <th className={classes.th}>Category</th>
      <th></th>
      <th></th>
      </tr>
    </thead>
  ))

  export default TableHeader;