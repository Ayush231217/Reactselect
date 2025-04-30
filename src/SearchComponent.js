// import React, { useState } from "react";
// const SearchComponent = () => {
//     const data = ['Accenture', 'Cognizant', 'Infosys', 'Capgemini'];
//     const [searchTerm, setsearchTerm] = useState('');
//     const filteredData = data.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
//     return (
//         <div style={{ textAlign: 'center', marginTop: '50px' }}>
//             <h2>Welcome to my Search Page</h2>
//             <input type="text" placeholder="Search your company" value={searchTerm}
//                 onChange={(e) => setsearchTerm(e.target.value)}
//                 style={{
//                     padding: '10px', width: '300px',
//                     marginBottom: '20px'

//                 }} />
//             <ul >
//                 {filteredData.map((company, index) => (
//                     <li key={index} >
//                         {company}
//                     </li>
//                 ))}
//             </ul>
//         </div>


//     )

// }
// export default SearchComponent;
// below code is for same using reactselect
// import React, { useState } from "react";
// import Select from "react-select";

// const SearchComponent = () => {
//     const data = ['Accenture', 'Cognizant', 'Infosys', 'Capgemini'];

//     const options = data.map(company => ({label: company,value: company}));

//     const [selectedOption, setSelectedOption] = useState('');

//     return (
//         <div style={{ textAlign: 'center', marginTop: '50px' }}>
//             <h2>Welcome to my Search Page</h2>
//             <div style={{ width: '300px', margin: '0 auto', marginBottom: '20px' }}>
//                 <Select 
//                     options={options}
//                     isClearable
//                     placeholder="Search your company"
//                     onChange={setSelectedOption}
//                 />
//             </div>
//             <ul>
//                 {selectedOption && (
//                     <li>{selectedOption.label}</li>
//                 )}
//             </ul>
//         </div>
//     );
// };

// export default SearchComponent;
// below code is for company and role using react-select :
// import React, { useState } from "react";

// const SearchComponent = () => {
//   const [company, setCompany] = useState('');
//   const [role, setRole] = useState('');

//   const options = {
//     Accenture: ['Frontend Developer', 'Backend Developer'],
//     Infosys: ['Data Analyst', 'Java Developer'],
//     Cognizant: ['Full Stack Developer', 'Tester'],
//     Capgemini: ['UI Developer', 'DevOps Engineer']
//   };

//   const handleCompanyChange = (e) => {
//     setCompany(e.target.value);
//     setRole(''); 
//   };

//   const handleRoleChange = (e) => {
//     setRole(e.target.value);
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2>Welcome to my Search Page</h2>

//       <select 
//         value={company} 
//         onChange={handleCompanyChange} 
//         style={{ padding: '10px', margin: '10px' }}
//       >
//         <option value="">Select Company</option>
//         {Object.keys(options).map((comp, index) => (
//           <option key={index} value={comp}>{comp}</option>
//         ))}
//       </select>

//       <select 
//         value={role} 
//         onChange={handleRoleChange}
//         disabled={!company}
//         style={{ padding: '12px', margin: '10px' }}
//       >
//         <option value="">Select Role</option>
//         {company && options[company].map((r, index) => (
//           <option key={index} value={r}>{r}</option>
//         ))}
//       </select>

//       <div style={{ marginTop: '30px' }}>
//         <p><strong>Selected Company:</strong> {company}</p>
//         <p><strong>Selected Role:</strong> {role}</p>
//       </div>
//     </div>
//   );
// };

// export default SearchComponent;
// below code is for reactselect using dynamic Form
import React, { useState } from "react";
import { Form } from "react-router-dom";

const SearchComponent = () => {
  const companyRoles = {
    Accenture: ['Frontend Developer', 'Backend Developer'],
    Infosys: ['Data Analyst', 'Java Developer'],
    Cognizant: ['Full Stack Developer', 'Tester'],
    Capgemini: ['UI Developer', 'DevOps Engineer']
  };

  const [rows, setRows] = useState([{ company: '', role: '' }]);

  const handleCompanyChange = (index, value) => {
    const updated = [...rows];
    updated[index].company = value;
    updated[index].role = ''; 
    setRows(updated);
  };

  const handleRoleChange = (index, value) => {
    const updated = [...rows];
    updated[index].role = value;
    setRows(updated);
  };

  const addRow = () => {
    setRows([...rows, { company: '', role: '' }]);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Welcome to My Search Page</h2>

      {rows.map((row, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px' }}>
          <select
            value={row.company}
            onChange={(e) => handleCompanyChange(index, e.target.value)}
            style={{ padding: '10px', marginRight: '10px' }}
          >
            <option value="">Select Company</option>
            {Object.keys(companyRoles).map((comp, i) => (
              <option key={i} value={comp}>{comp}</option>
            ))}
          </select>

          <select
            value={row.role}
            onChange={(e) => handleRoleChange(index, e.target.value)}
            disabled={!row.company}
            style={{ padding: '10px', marginRight: index === 0 ? '10px' : 0 }}
          >
            <option value="">Select Role</option>
            {row.company && companyRoles[row.company].map((role, i) => (
              <option key={i} value={role}>{role}</option>
            ))}
          </select>

          {index === rows.length - 1 && (
            <button onClick={addRow} style={{ padding: '8px 12px', fontSize: '16px' }}>+</button>
          )}
        </div>
      ))}

      <div style={{ marginTop: '30px' }}>
        <h4>Selections:</h4>
        {rows.map((row, i) => (
          <p key={i}>
            <strong>Company:</strong> {row.company || 'None'} &nbsp; | &nbsp;
            <strong>Role:</strong> {row.role || 'Not'}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;




