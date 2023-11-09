/* eslint-disable react/prop-types */
// import "./Modal.css";

// export function Modal(props) {
//   if (props.show) {
//     return (
//       <div className="modal-background">
//         <section className="modal-main">
//           {props.children}
//           <button className="close" type="button" onClick={props.onClose}>
//             &#x2715;
//           </button>
//         </section>
//       </div>
//     );
//   }
// }
// <!-- Button trigger modal -->
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>;

// <!-- Modal -->

export function Modal(props) {
  if (props.show) {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {props.children}
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              {/* <button type="button" className="btn btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
