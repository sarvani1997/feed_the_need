import Image from 'next/image';
import logo from '../public/logo.jpeg';
import styles from '../styles/AboutFeedTheNeed.module.css';

export default function AboutFeedTheNeed() {
  return (
    <section id="about">
      <div className={styles.about}>
        <div className=" px-4 ">
          <div className="row gx-5 align-items-center justify-content-between">
            <div className="col">
              <Image src={logo} alt="logo" />
            </div>
            <div className="col-6">
              <div>
                <h4>About Feed The Need</h4>
                <p>
                  Hello Friends..! Hope you are fine and safe. This time, we are
                  here for a very necessary cause.. This is a small gesture that
                  we are initiating to feed the needy. Not everyone is having 3
                  meals like you everyday. Not everyone would understand the
                  pain of searching for food everyday. So kindly take your
                  thought ahead in serving the poor in these tough times..
                  Donate 1/- per day We make your 1/- worthy to save a few of
                  those who are in search of food just to be alive. A hungry man
                  is not a free man. ~ Adlai E. Stevenson Come and join us in
                  this fight to free those who are dying from hunger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
