import React, { useState } from 'react';
import '../BookTable/BookTable.css'
import axios from 'axios'
import toast from 'react-hot-toast'

function BookTable(props) {
    const [table, setTable] = useState({
        usrName: "",
        totalPeople: "",
        totalChild: "",
        totalTable: "",
        bookingDate: "",
        StartBookingTime: "",
        endBookingTime: ""
    })


    const handlBookingTable = (e) => {
        setTable({ ...table, [e.target.name]: e.target.value })
    }

    const bookNow = (e) => {
        e.preventDefault()

        if (!table.usrName || !table.totalPeople || !table.totalChild || !table.totalTable || !table.bookingDate  || !table.StartBookingTime  || !table.endBookingTime) {
            toast.error('Invalid Fields')
        }
       
        else {
            try {
                axios.post("http://localhost:8888/table", table)
                    .then((res) => {
                        console.log(res.status);
                        if (res.status == 200) {
                            toast.success('Message Send Sucessfull')
                            setTable({
                                usrName: "",
                                totalPeople: "",
                                totalChild: "",
                                totalTable: "",
                                bookingDate: "",
                                StartBookingTime: "",
                                endBookingTime: ""
                            })
                        }

                    })
                    .catch((err) => {
                        console.log(err);
                    })
            } catch (error) {
                console.log('Something went wromg');
            }
        }

    }


    return (
        <>
            <div className='container' id='table'>
                <div className='row'>
                    <h3>Book Your Table</h3>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-8'>
                        <form>
                            <div className='form-group mb-3'>
                                <label>Full Name</label>
                                <input className='w-100 ' type='text' placeholder=' Enter Name' name='usrName' value={table.usrName} onChange={handlBookingTable}></input>
                            </div>

                            <div className='form-group mb-3'>
                                <label>Total People</label>
                                <input className='w-100' type='number' placeholder='Number of people' name='totalPeople' value={table.totalPeople} onChange={handlBookingTable}></input>
                            </div>
                            <div className='form-group mb-3'>
                                <label>Total Child</label>
                                <input className='w-100' type='number' placeholder=' Children' name='totalChild' value={table.totalChild} onChange={handlBookingTable}></input>

                            </div>
                            <div className='form-group mb-3'>
                                <label>Total Table</label>
                                <input className='w-100' type='number' placeholder=' Number of table you want to book' name='totalTable' value={table.totalTable} onChange={handlBookingTable}></input>

                            </div>
                            <div className='form-group mb-3'>
                                <label>Booking Date</label>
                                <input className='w-100' type='date' placeholder='Booking Date' name='bookingDate' value={table.bookingDate} onChange={handlBookingTable}></input>
                            </div>
                            <div className='form-group mb-3'>
                                <label>Enter Starting Time</label>
                                <input className='w-100' type='time' placeholder='  Enter Starting Time' name='StartBookingTime' value={table.StartBookingTime} onChange={handlBookingTable}></input>
                            </div>
                            <div className='form-group mb-3'>
                                <label>Enter Ending Time</label>
                                <input className='w-100' type='time' placeholder=' Enter Ending Time' name='endBookingTime' value={table.endBookingTime} onChange={handlBookingTable}></input>

                            </div>
                            <button type="submit" onClick={bookNow}>Book Now</button>
                        </form>
                    </div>
                    <div className='col-lg-2'></div>
                </div>
            </div>
        </>
    );
}

export default BookTable;


