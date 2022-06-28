// import logo from './logo.svg';
import './App.css';

import Data from './data.json';

function App() {
  return (
    <>
      <div className="div-container">

        {
          Data.map((item) => {
            return (
              <>
                <div className='heading'>
                  <h1>{item.main_content}</h1>
                  <p>{item.sub_head} <span className="in-circle">?</span></p>
                </div>
                <div className='more-info-div'>
                  <div className='text-div'>
                    <div className='text'>
                      <p>{item.info_text}</p>
                    </div>
                    <div class="user-img">
                      <img src={item.teacher_img} alt="" />
                      <h3>{item.teacher_name}</h3>
                    </div>
                    <div className="rating">
                      <p><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> 467 total reviews for this teacher</p>
                      <p><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> 5 reviews for this class</p>
                      <h3>Completed by 21 learners</h3>
                    </div>
                    <div className="button-div">
                      <button className="btn">See Class Schedule <i className="fa fa-angle-right"></i></button>
                      <button className="save-btn"><i className="fa fa-heart-o"></i> &nbsp;&nbsp; Save</button>
                      <button className="share-btn"><i className="fa fa-share"></i> &nbsp;&nbsp;Share</button>
                    </div>
                  </div>
                  <div className='img-div'>
                    <div className="img-1">
                      <img src={item.art_img_1} alt=""/>
                    </div>
                    <div className="img-2">
                      <img src={item.art_img_2} alt=""/>
                    </div>
                    <div className="img-3">
                      <img src={item.art_img_3} alt=""/>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
