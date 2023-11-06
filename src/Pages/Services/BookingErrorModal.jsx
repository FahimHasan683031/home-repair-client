
const BookingErrorModal = () => {
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="px-3 py-[10px] text-white w-full bg-teal-600 rounded-sm text-sm font-bold" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Now</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Sorry!</h3>
                    <p className="py-4">It is your Service. Tyr another one.</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="px-3 py-[10px] text-white w-full bg-teal-600 rounded-sm text-sm font-bold">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default BookingErrorModal;