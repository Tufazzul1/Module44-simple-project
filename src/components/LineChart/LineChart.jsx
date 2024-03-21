import { Bar, BarChart, LineChart as LChart, Line, Tooltip, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentData = [
        { id: 1, name: "Student 1", mathMark: 85, physicsMark: 78, chemistryMark: 90 },
        { id: 2, name: "Student 2", mathMark: 70, physicsMark: 65, chemistryMark: 75 },
        { id: 3, name: "Student 3", mathMark: 92, physicsMark: 85, chemistryMark: 88 },
        { id: 4, name: "Student 4", mathMark: 78, physicsMark: 72, chemistryMark: 80 },
        { id: 5, name: "Student 5", mathMark: 88, physicsMark: 82, chemistryMark: 85 },
        { id: 6, name: "Student 6", mathMark: 65, physicsMark: 60, chemistryMark: 70 },
        { id: 7, name: "Student 7", mathMark: 95, physicsMark: 88, chemistryMark: 92 },
        { id: 8, name: "Student 8", mathMark: 82, physicsMark: 76, chemistryMark: 78 },
        { id: 9, name: "Student 9", mathMark: 75, physicsMark: 68, chemistryMark: 72 },
        { id: 10, name: "Student 10", mathMark: 90, physicsMark: 84, chemistryMark: 88 }
    ];


    return (
        <div>
            <LChart width={800} height={400} data={studentData}>
                <Tooltip />
                <Line dataKey="mathMark" stroke="red"></Line>
                <Line dataKey="physicsMark"></Line>
                <Line dataKey="chemistryMark" stroke='blue'></Line>
                <XAxis dataKey="name" />
                <YAxis></YAxis>

            </LChart>
            <BarChart width={800}  height={400} data={studentData}>
                <Tooltip/>
                <Bar dataKey="mathMark"></Bar>
                <Bar dataKey="physicsMark" fill="#8884d8"></Bar>
                <XAxis dataKey="name" />
                <YAxis></YAxis>

            </BarChart>
        </div>
    );
};

export default LineChart;