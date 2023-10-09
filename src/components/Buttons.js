import { hover } from "@testing-library/user-event/dist/hover"
import { useState } from "react"

function Buttons() {

  return (
    <div className="container">
      <div className="emojis">
        <center>
          <div className="images">
            <img width={50} className="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0QE9N5XRSxLrH_LvUgCJBoZa7Cfflz_j1jw&usqp=CAU" />
            <img width={50} className="pic" src="https://freepngimg.com/thumb/emoji/73705-emoticon-sticker-smiley-facebook-emoji-download-free-image.png" />
            <img width={50} className="pic" src="https://w7.pngwing.com/pngs/409/185/png-transparent-happy-emoji-facebook-like-button-emoji-emoticon-haha-smiley-logos-long-time-no-see.png" />
            <img width={50} className="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsm6AUCROkxN8_rR9PXXRgVDAgxOt_VBvS5g&usqp=CAU" />
            <img width={55} className="pic" src="https://w7.pngwing.com/pngs/7/748/png-transparent-facebook-like-button-chemical-reaction-computer-icons-facebook-blue-text-hand.png" />
          </div>
        </center>
        < button className="aaa" style={{ backgroundColor: "black", width: 100 }}>Like</button>
      </div>
      
      <div style={{display:"inline-block"}}>
        <button style={{ backgroundColor: "black", width: 120 ,marginLeft:20 }}>Comment</button>
        <button style={{ backgroundColor: "black", width: 100,marginLeft:30 }}>Share</button>
      </div>
      
    </div>

  )
}

export default Buttons