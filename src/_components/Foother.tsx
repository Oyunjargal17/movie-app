export const Foother = () => {
  return (
    <div>
      <div className="bg-[#4338CA] ">
        <div className="flex flex-col justify-between">
          <div className="flex gap-2 pl-5 pt-2">
            <img className="w-5 h-5" src="./filmWhite.svg" alt="filmWhite" />
            <img src="./Movie ZWith.svg" alt="Movie ZWith" />
          </div>
          <div>
            <p className="text-white pl-5">
              © 2024 Movie Z. All Rights Reserved.
            </p>
          </div>

          <div className="flex justify-between">
            <div>
              <div className="pl-5">
                <p className="text-white">Contact Information</p>
                <div className="flex gap-2">
                  <img src="./email.svg" alt="email" />
                  <div>
                    <p className="text-white">Email:</p>
                    <p className="text-white">support@movieZ.com</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src="./phone.svg" alt="phone" />
                  <div>
                    <p className="text-white">Phone:</p>
                    <p className="text-white">+976 (11) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="pr-5">
                <h1 className="text-white">Follow us</h1>
                <div className="text-white">
                  <p>Facebook</p>
                  <p>Instagram</p>
                  <p>Twitter</p>
                  <p>Youtube</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
