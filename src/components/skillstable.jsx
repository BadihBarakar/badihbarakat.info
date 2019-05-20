import React from 'react';


const SkillsTable = (props) => {
    return (
        <table style={{textAlign: "left", fontSize: "1vw"}}>
            <theader>
                <tr>
                    <td colSpan="2" ><p className="tblHeader">Skills and Knowledge</p></td>
                </tr>
            </theader>
            <tbody >
                <tr>
                    <td>Project Management</td>
                    <td></td>
                </tr>
                <tr>
                    <td>React.js</td>
                    <td></td>
                </tr>
                <tr>
                    <td>REST API</td>
                    <td></td>
                </tr>
                <tr>
                    <td>HTML5</td>
                    <td></td>
                </tr>
                <tr>
                    <td>CSS3</td>
                    <td></td>
                </tr>
                <tr>
                    <td>JavaScript</td>
                    <td></td>
                </tr>
                <tr>
                    <td>TypeScript</td>
                    <td></td>
                </tr>
                <tr>
                    <td>ASP.NET (C#)</td>
                    <td></td>
                </tr>
                <tr>
                    <td>PHP7</td>
                    <td></td>
                </tr>
                <tr>
                    <td>jQuery</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Node.js</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Database Administration (MS-SQL, MySQL, Oracle)</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Software Development Life Cycle (SDLC)</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
};

export default SkillsTable;