import React, { useState } from 'react';
import '../App.css';
import relections from '../assets/img/reflections.gif'

function MembersReflections() {
    return (

        <div className="App" >
            <section className="bg-light page-section" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className="service-heading">MEMBERS REFLECTIONS</h3>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="team-member">
                                <h9 className="service-heading" style={{ float: 'left' }}>David Chong  (2016 class of Leland High School)</h9>
                                <br />
                                <br />
                                <br />
                                <ul style={{ textAlign: 'left' }}>
                                    <p className="text-muted" >My experience at AYM has been truly humbling. At first, I joined with my brother under the pretense that I was simply going to receive community service hours, but it was until after one of our performances at the Sunnyvale Senior Center when I learned and appreciated the AYM’s selfless intentions. AYM has taught me to be grateful for the things I have and to also be aware of people and my surroundings.  Growing with AYM since its germination has definitely given me something to write about for college, but the memories and the experiences could never be fully expressed through words and lines. So, thank you AYM. </p>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="team-member">
                                <h9 className="service-heading" style={{ float: 'left' }}>Sooyoung Park  (2017 class of Leigh High School)</h9>
                                <br />
                                <br />
                                <br />
                                <ul style={{ textAlign: 'left' }}>
                                    <p className="text-muted" >AYM was an invaluable experience for me as I not only learned of the power of music by playing for people living in senior centers and nursing homes, but I was also introduced to the different conditions in which others around me were living. I had expected live music to be a definite part of everyone’s lives - something that surely everyone would have access to. However, while going around and playing my repertoire to those nearby me, I realized how much of a privilege it was for me to be able to not only hear, but also play music that people can enjoy. After playing at nursing homes, the residents always welcomed me with warm applause, and it was truly gratifying to see them be comforted with the melodies that I could share with them. I am blessed to be a part of AYM, and I hope it continues to grow and spread music around with each and every passing year!</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="team-member">
                                <h9 className="service-heading" style={{ float: 'left' }}>SueMin Choi  (2017 class of Lynbrook High School)</h9>
                                <br />
                                <br />
                                <br />
                                <ul style={{ textAlign: 'left' }}>
                                    <p className="text-muted" >Joining AYM was probably one of the best decisions I have made since coming to America. Through all the performances and volunteer events, I discovered the potential of sharing something as simple as music with others. You can see it in the faces of our audiences after every piece; we are giving them something truly special that they will remember for a long time. Participating in AYM has taught me to always look for opportunities to bless others in my daily live; the smallest of kind gestures could make someone’s day. I will never forget all the things we did and all the great people I met here. Thank you for giving me this opportunity to play my instrument to help others. </p>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="team-member">
                                <h9 className="service-heading" style={{ float: 'left' }}>Seyoon Pak  (2017 class of LeHigh School)</h9>
                                <br />
                                <br />
                                <br />
                                <ul style={{ textAlign: 'left' }}>
                                    <p className="text-muted" >My experience at AYM has been truly humbling. At first, I joined with my brother under the pretense that I was simply going to receive community service hours, but it was until after one of our performances at the Sunnyvale Senior Center when I learned and appreciated the AYM’s selfless intentions. AYM has taught me to be grateful for the things I have and to also be aware of people and my surroundings.  Growing with AYM since its germination has definitely given me something to write about for college, but the memories and the experiences could never be fully expressed through words and lines. So, thank you AYM. </p>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        
                            <img  className="img-fluid" src={relections} alt="" />
                       
                    </div>
                </div>
            </section>
        </div>

    );
}

export default MembersReflections;
