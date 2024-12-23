// src/ItemDisplay.jsx
function ItemDisplay({ item }) {
    return (
        <div>
            <h3>{item.course}</h3>
            <p>Student: {item.student.firstname} {item.student.lastname}</p>
            <p>Date: {item.date}</p>
            <p>Grade: {item.grade}</p>
        </div>
    );
}

export default ItemDisplay;