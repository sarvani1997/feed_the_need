import Image from 'next/image';
import pp from '../public/pp.jpeg';

export default function Founder() {
  return (
    <div>
      <div className="container px-4">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3">
              <h5>ABOUT YOU</h5>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <Image src={pp} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
