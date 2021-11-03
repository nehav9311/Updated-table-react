import React, { Fragment, useState } from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

const DataTable = () => {
  const [rowCount, setRowCount] = useState("");
  const [colCount, setColCount] = useState("");

  const [rowCountArray, setRowCountArray] = useState([]);
  const [colCountArray, setColCountArray] = useState([]);

  const [appCount, setAppCount] = useState(1);

  const [showTable, setShowTable] = useState(false);

  const CreateTable = async () => {
    setShowTable(false);
    rowCountArray.length = 0;
    colCountArray.length = 0;

    for (let i = 1; i <= rowCount; i++) {
      rowCountArray.push(i);
    }
    setRowCountArray(rowCountArray);

    for (let i = 1; i <= colCount; i++) {
      colCountArray.push(i);
    }
    setColCountArray(colCountArray);

    setShowTable(true);
  };
  console.log(rowCount);
  console.log(colCount);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Sample</TableCell>
            <TableCell>For Appraiser = 1, set trial</TableCell>
            <TableCell>Appraiser</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              <input
                type="text"
                id="txtrows"
                value={rowCount}
                placeholder="Sample"
                onChange={(e) => setRowCount(e.target.value)}
              />
            </TableCell>

            <TableCell component="th" scope="row">
              <input
                type="text"
                id="txtcols"
                value={colCount}
                placeholder="Trial"
                onChange={(e) => setColCount(e.target.value)}
              />
            </TableCell>

            <TableCell component="th" scope="row">
              <input
                type="text"
                id="txtcols"
                value={appCount}
                placeholder="Appraiser = 1"
                onChange={(e) => setAppCount(e.target.value)}
              />
            </TableCell>

            <TableCell>
              <Button variant="contained" color="primary" onClick={CreateTable}>
                Create Table
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <p>If Appraiser count = n, create n such tables</p>

      {showTable ? (
        <Table>
          <TableBody>
            <TableCell>Appraiser count</TableCell>
            {rowCountArray.map((row, index) => (
              <TableRow>
                {colCountArray.map((col, index) => (
                  <TableCell key={index}>Trial {col}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : null}
    </>
  );
};

export default DataTable;
