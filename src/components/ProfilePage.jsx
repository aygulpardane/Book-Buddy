
import React from "react";
import { useFetchUserQuery, useFetchReservationsQuery, useRemoveResMutation } from '../redux/BooksApi';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const token = useSelector((state) => state.token);

    const { data, error, isLoading } = useFetchUserQuery({ token });
    const resData = useFetchReservationsQuery({ token });
    const navigate = useNavigate();

    const [returnBook] = useRemoveResMutation();

    const handleReturn = async (resId) => {

      try {

        const result = await returnBook({ resId, token });
        console.log(result);

      } catch (error) {
        console.error(error);
      }

      navigate('/profile');
    };


    if (isLoading || resData.isLoading) {
        return <p>Loading...</p>;
    }

    if (error || !resData.data || !resData.data.reservation) {
        return <p>Error loading data...</p>;
    }

    return (
        <>
            {data && (
                <div className="profile">
                    <h1>You are logged in as: {data.firstname} {data.lastname}</h1>
                    <h2>My checked out books:</h2>
                </div>
            )}

            <div className="books-list">
                {resData.data.reservation.map((reservation) => (
                    <div key={reservation.id} className="book-card">
                        <h2>{reservation.title}</h2>
                        <p>{reservation.author}</p>
                        <img src={reservation.coverimage} alt={reservation.title} className="single-image" />
                        <Button onClick={() => handleReturn(reservation.id)}>Return</Button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Profile;
