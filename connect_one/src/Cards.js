import React from "react";
// import Java from './java.jpg'
// import Random2 from './Random_Person2.jpg'
// import Bio from './Bio.jpg'


export function Cards(props) {
    let favoriteBtnClasses = 'bi bi-heart';
    let favoriteBtnText = 'Follow';
    if (props.user.isFavorite === true) {
        favoriteBtnClasses += '-fill';
        favoriteBtnText += 'd';
    }


    return (
        <div className="d-flex col-md-6 col-xl-3">
        <div className="card mb-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-auto col-xl-12">
                        <img className="imgsetting" src={props.user.img} alt={props.user.name} />
                    </div>
                    <div className="col-sm">
                        <h2 className="card-title">{props.user.name}</h2>
                        <p className="card-text">{props.user.drops}</p>
                        <p className="card-text">{props.user.Classroom}</p>
                        <button aria label="favorite" className="btn btn-outline-danger" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" className={favoriteBtnClasses} viewBox="0 0 16 16">
                                {props.user.isFavorite === true ?
                                    (<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />) :
                                    (<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />)}
                            </svg> {favoriteBtnText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )

}