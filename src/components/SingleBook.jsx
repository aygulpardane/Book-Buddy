import React, {useState} from 'react';
import {
    useFetchSingleBookQuery,
    useCheckoutBookMutation,
    useFetchReservationsQuery
} from '../redux/BooksApi';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SingleBook = () => {
    const token = useSelector(state => state.token);
    const { id } = useParams();
    const { data, error, isLoading } = useFetchSingleBookQuery(id);
    const navigate = useNavigate();

    const [checkoutBook] = useCheckoutBookMutation();
    const resData = useFetchReservationsQuery({ token });
    const [reservation, setReservation] = useState();

    const handleCheckout = async (e) => {
      e.preventDefault();

      try {

        if (!token || !id) {
            console.error('Invalid token or book id');
            return;
          }

        const result = await checkoutBook({bookId: id, token, isAvailable: false});
        console.log(result);

        await resData.refetch();

        const checkedOutBook = result.data;

        setReservation(checkedOutBook);

      } catch (error) {
        console.error(error);
      }

      navigate('/profile');
    };

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div className="single-book">
            <div key={data.book.id} className="single-card">
                <div className="image-container">
                    <img className="single-image" src={data.book.coverimage} alt={data.book.title} />
                </div>

                <div className="single-details">
                    <h1 className="book-title">{data.book.title}</h1>
                    <h2 className="book-author">Author: {data.book.author}</h2>
                </div>

                {token && (
                        <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
                )}
            </div>
        </div>
    );
};

export default SingleBook;
