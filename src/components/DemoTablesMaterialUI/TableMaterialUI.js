// import React, { useState } from "react";
// import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
// import {
//   Paper,
//   makeStyles,
//   TableBody,
//   TableRow,
//   TableCell,
//   Toolbar,
//   InputAdornment,
// } from "@material-ui/core";
// import { Search } from "@material-ui/icons";

// const useStyles = makeStyles((theme) => ({
//   pageContent: {
//     margin: theme.spacing(5),
//     padding: theme.spacing(3),
//   },
//   searchInput: {
//     width: "75%",
//   },
// }));

// function TableMaterialUI() {
//   const [data, setData] = useState([
//     {
//       name: "PythonDemo",
//       passPercentage: 70.0,
//       technology: 1,
//       questionsPerSet: 12,
//       level: 1,
//       duration: 10,
//       id: "07dbf6a3-0060-4914-87d5-3d6a20f72e43",
//       createdBy: "tag1",
//       createdOn: "3/8/21, 1:05 PM",
//       managerId: null,
//     },
//     {
//       name: "OOPs concepts",
//       passPercentage: 70.0,
//       technology: 2,
//       questionsPerSet: 5,
//       level: 1,
//       duration: 10,
//       id: "ca36b938-c458-4c44-b4fe-3ae33c1ddd86",
//       createdBy: "managera",
//       createdOn: "3/8/21, 1:13 PM",
//       managerId: null,
//     },
//     {
//       name: "Python Basics1",
//       passPercentage: 70.0,
//       technology: 1,
//       questionsPerSet: 10,
//       level: 1,
//       duration: 10,
//       id: "00cefb33-5f75-43fa-859d-81cb7c957148",
//       createdBy: "managera",
//       createdOn: "3/8/21, 1:25 PM",
//       managerId: null,
//     },
//     {
//       name: "java test",
//       passPercentage: 80.0,
//       technology: 2,
//       questionsPerSet: 5,
//       level: 1,
//       duration: 10,
//       id: "d5c39130-ee17-465b-a33b-f26c39862d90",
//       createdBy: "tag1",
//       createdOn: "3/8/21, 2:45 PM",
//       managerId: null,
//     },
//     {
//       name: "PythonCore2",
//       passPercentage: 70.0,
//       technology: 1,
//       questionsPerSet: 5,
//       level: 1,
//       duration: 25,
//       id: "c9cbbb6e-a7ef-4ed7-bd80-119454045a5b",
//       createdBy: "tag1",
//       createdOn: "3/8/21, 2:45 PM",
//       managerId: null,
//     },
//     {
//       name: "OOPs concepts45",
//       passPercentage: 70.0,
//       technology: 2,
//       questionsPerSet: 10,
//       level: 1,
//       duration: 12,
//       id: "ad28d967-81a6-4992-8bbf-b5fbe2a1d33d",
//       createdBy: "managera",
//       createdOn: "3/8/21, 2:56 PM",
//       managerId: null,
//     },
//     {
//       name: "PythonCore56",
//       passPercentage: 70.0,
//       technology: 1,
//       questionsPerSet: 12,
//       level: 1,
//       duration: 25,
//       id: "ff4fdef1-7dfa-4d4c-a678-b2385416ee3d",
//       createdBy: "tag1",
//       createdOn: "3/8/21, 2:59 PM",
//       managerId: null,
//     },
//     {
//       name: "RandomTest",
//       passPercentage: 70.0,
//       technology: 1,
//       questionsPerSet: 10,
//       level: 1,
//       duration: 7,
//       id: "f989a982-8e4a-4e9d-bc60-73f68226b756",
//       createdBy: "tag1",
//       createdOn: "3/8/21, 3:05 PM",
//       managerId: null,
//     },
//     {
//       name: "PythonCore467",
//       passPercentage: 70.0,
//       technology: 1,
//       questionsPerSet: 10,
//       level: 1,
//       duration: 10,
//       id: "e89ef986-a206-44ae-bc0e-e531b153a83f",
//       createdBy: "tag1",
//       createdOn: "3/8/21, 3:15 PM",
//       managerId: null,
//     },
//     {
//       name: "PythonCoreB1",
//       passPercentage: 70.0,
//       technology: 1,
//       questionsPerSet: 10,
//       level: 1,
//       duration: 10,
//       id: "0db85eb2-eb3a-494b-93e3-c454bc1df5a2",
//       createdBy: "tag1",
//       createdOn: "3/9/21, 3:45 AM",
//       managerId: null,
//     },
//     {
//       name: "PythonCoreDemo5",
//       passPercentage: 70.0,
//       technology: 1,
//       questionsPerSet: 10,
//       level: 1,
//       duration: 30,
//       id: "4a30a8c9-1da1-41a4-844a-451ebbf18ec2",
//       createdBy: "tag1",
//       createdOn: "3/9/21, 6:32 AM",
//       managerId: null,
//     },
//     {
//       name: "PythonDemo9",
//       passPercentage: 70.0,
//       technology: 1,
//       questionsPerSet: 10,
//       level: 1,
//       duration: 10,
//       id: "19df0d80-460d-4c2e-984e-2bdc66ab469f",
//       createdBy: "tag1",
//       createdOn: "3/10/21, 8:20 AM",
//       managerId: null,
//     },
//     {
//       name: "PythonCore",
//       passPercentage: 70.0,
//       technology: 1,
//       questionsPerSet: 10,
//       level: 1,
//       duration: 10,
//       id: "a8994542-671c-4717-b111-85ce602a6a83",
//       createdBy: "tag1",
//       createdOn: "3/11/21, 6:05 AM",
//       managerId: null,
//     },
//     {
//       name: "OOPs concepts234",
//       passPercentage: 70.0,
//       technology: 2,
//       questionsPerSet: 10,
//       level: 1,
//       duration: 10,
//       id: "a05b183f-d92e-4cee-9303-5887a51f845a",
//       createdBy: "managera",
//       createdOn: "3/11/21, 6:18 AM",
//       managerId: null,
//     },
//   ]);
//   const {
//     TblContainer,
//     TblHead,
//     TblPagination,
//     recordsAfterPagingAndSorting,
//   } = useTable(data, headCells, filterFn);

//   const handleSearch = (e) => {
//     let target = e.target;
//     setFilterFn({
//       fn: (items) => {
//         if (target.value == "") return items;
//         else
//           return items.filter((x) =>
//             x.fullName.toLowerCase().includes(target.value)
//           );
//       },
//     });
//   };

//   return (
//     <div>
//       <PageHeader
//         title="New Employee"
//         subTitle="Form design with validation"
//         icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
//       />
//       <Paper className={classes.pageContent}>
//         {/* <EmployeeForm /> */}
//         <Toolbar>
//           <Controls.Input
//             label="Search Employees"
//             className={classes.searchInput}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <Search />
//                 </InputAdornment>
//               ),
//             }}
//             onChange={handleSearch}
//           />
//         </Toolbar>
//         <TblContainer>
//           <TblHead />
//           <TableBody>
//             {recordsAfterPagingAndSorting().map((item) => (
//               <TableRow key={item.id}>
//                 <TableCell>{item.name}</TableCell>
//                 <TableCell>{item.passPercentage}</TableCell>
//                 <TableCell>{item.technology}</TableCell>
//                 <TableCell>{item.questionsPerSet}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </TblContainer>
//         <TblPagination />
//       </Paper>
//     </div>
//   );
// }

// export default TableMaterialUI;
