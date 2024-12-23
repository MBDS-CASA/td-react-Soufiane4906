import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import notesData from '../../../data.json';

function Notes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        setNotes(notesData);
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Course</TableCell>
                        <TableCell>Student</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Grade</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {notes.map((note) => (
                        <TableRow key={note.unique_id}>
                            <TableCell>{note.course}</TableCell>
                            <TableCell>{note.student.firstname} {note.student.lastname}</TableCell>
                            <TableCell>{note.date}</TableCell>
                            <TableCell>{note.grade}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Notes;