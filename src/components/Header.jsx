

const Header = () => {
    return (
        <>
            <div className="menu">
                <div className="cashlogo">
                    <svg width="30" height="44" viewBox="0 0 30 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.3509 13.79C25.4682 13.9085 25.6076 14.0026 25.7611 14.0667C25.9146 14.1309 26.0792 14.164 26.2454 14.164C26.4116 14.164 26.5762 14.1309 26.7297 14.0667C26.8832 14.0026 27.0226 13.9085 27.1399 13.79L29.6246 11.19C29.7488 11.0595 29.846 10.9054 29.9103 10.7367C29.9746 10.5679 30.0049 10.388 29.9994 10.2074C29.9938 10.0268 29.9525 9.8491 29.878 9.68472C29.8034 9.52033 29.697 9.37255 29.565 9.25C27.6034 7.5359 25.323 6.23067 22.8562 5.41L23.6414 1.61C23.6822 1.42009 23.6811 1.2235 23.6383 1.03405C23.5955 0.844598 23.5119 0.66689 23.3935 0.513423C23.2751 0.359956 23.1246 0.234459 22.9528 0.145757C22.781 0.0570546 22.592 0.00730265 22.399 0L17.5886 0C17.2879 0.00324447 16.9975 0.11031 16.7659 0.303273C16.5343 0.496236 16.3756 0.763385 16.3164 1.06L15.6207 4.44C9.22002 4.77 3.79336 8 3.79336 14.74C3.79336 20.54 8.27582 23.03 13.0167 24.74C17.4991 26.46 19.8745 27.1 19.8745 29.52C19.8745 31.94 17.5091 33.47 14.0106 33.47C12.3262 33.4957 10.6537 33.1835 9.09053 32.5517C7.52741 31.9198 6.10505 30.981 4.90652 29.79C4.78652 29.6691 4.64399 29.5731 4.48709 29.5076C4.33019 29.4422 4.162 29.4085 3.99214 29.4085C3.82229 29.4085 3.6541 29.4422 3.4972 29.5076C3.3403 29.5731 3.19777 29.6691 3.07776 29.79L0.39425 32.49C0.141769 32.7449 0 33.0901 0 33.45C0 33.8099 0.141769 34.1551 0.39425 34.41C2.55637 36.5217 5.22294 38.0371 8.13667 38.81L7.40119 42.38C7.35847 42.5722 7.3587 42.7716 7.40189 42.9637C7.44507 43.1558 7.53012 43.3358 7.65089 43.4909C7.77167 43.6459 7.92515 43.7719 8.10026 43.86C8.27537 43.948 8.46772 43.9959 8.66344 44H13.4838C13.7793 44.0026 14.0671 43.9055 14.3013 43.7242C14.5355 43.543 14.7026 43.288 14.7759 43L15.4716 39.61C23.1743 39.09 27.8654 34.82 27.8654 28.61C27.8654 22.87 23.1941 20.45 17.529 18.48C14.2889 17.27 11.4861 16.48 11.4861 13.95C11.4861 11.42 14.1 10.57 16.7239 10.57C19.9043 10.5918 22.9718 11.759 25.3708 13.86L25.3509 13.79Z" fill="#00D54B"/>
                    </svg>
                </div>
                <div className="menutext">
                    <span className='space'>Sign In</span>
                    <span className='space'>Legal</span>
                    <span className='space'>Licenses</span>
                    <span className='space'>Security</span>
                    <span className='space'>Careers</span>
                    <span className='space'>Press</span>
                    <span className='space'>Support</span>
                    <span className='space'>Status</span>
                    <span className='space'>Codeblog</span>
                </div>
                <div className="eye">
                    <svg width="65" height="37" viewBox="0 0 65 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M62.6514 19.6447C62.1144 21.3158 61.0865 22.7368 58.8384 25.2179L57.5061 26.6815C56.9922 27.2499 56.7223 27.5768 56.4552 27.9377C55.3068 29.5037 50.6353 31.9421 46.9515 33.3006C45.7825 33.7117 44.5798 34.0217 43.3567 34.2271L41.5679 34.5397L36.974 35.3213C34.3669 35.7874 32.0068 35.7334 28.2655 35.2815L24.622 34.8211C24.2659 34.7813 24.019 34.7614 23.6716 34.733H23.5768C21.8283 34.5994 20.4845 34.1902 18.2651 33.2296L16.6486 32.5219C15.9681 32.2377 15.4024 32.0103 14.854 31.8341L14.5669 31.7489C11.8192 30.9247 6.10254 26.7384 4.34535 24.3312L4.13288 24.0299C3.21409 22.6885 2.59965 21.7563 2.01392 19.838V19.0422L2.30104 18.1185C2.85806 16.5242 3.8314 15.1401 5.90156 12.8125L7.60994 10.9197C8.04636 10.428 8.29042 10.1296 8.53447 9.78291C9.68296 8.21127 14.3545 5.76145 18.0354 4.40013C19.0828 4.02909 20.1593 3.74393 21.254 3.54752L22.2388 3.36279L28.01 2.38514C30.7262 1.89631 33.1782 1.97588 37.1979 2.48745L40.3333 2.88817C40.6893 2.92796 40.9363 2.94785 41.2837 2.97628H41.3784C43.0237 3.10132 44.3071 3.47363 46.3026 4.32055L48.3125 5.19589C48.9863 5.49272 49.6765 5.75175 50.3797 5.97176C53.1246 6.80163 58.8412 11.0021 60.5956 13.4178L60.7994 13.7276C61.7153 15.0747 62.1805 16.1604 62.7691 18.093L62.9557 18.7267L62.6514 19.6447Z" fill="white"/>
                    <path d="M23.5509 3.29497L24.1252 3.03066C26.6938 1.65882 29.5676 0.942917 32.4862 0.947465C34.6241 0.94718 36.7442 1.33227 38.7426 2.08427L39.1101 2.17237C41.298 2.65836 43.6093 4.82682 45.2115 6.1512C46.3427 7.08338 47.4223 8.9449 48.1717 10.4142C48.2636 10.5904 48.3555 10.7723 48.4416 10.9542C48.634 11.3464 48.7948 11.6931 48.9182 11.9574C49.2174 12.6367 49.4465 13.3443 49.6016 14.0691C49.8482 15.0163 50.0145 15.982 50.0983 16.9566C50.1635 17.4567 50.2275 17.9882 50.2907 18.5509C50.641 21.6942 48.8292 25.2638 48.3354 26.5228C47.8415 27.7818 45.5819 30.5272 45.223 31.0331C44.8641 31.5389 41.0913 33.9802 40.7438 34.2872C40.3964 34.5941 37.0802 35.6542 36.549 35.8048C36.0178 35.9554 31.7569 36.288 31.1482 36.288C30.5395 36.288 25.914 34.8925 25.512 34.6964C25.11 34.5003 22.5087 33.085 21.9804 32.8264C21.4521 32.5678 19.1666 30.2259 18.8967 29.8963C18.6268 29.5666 16.2953 26.0737 16.0829 25.6332C15.8704 25.1927 15.2789 23.226 15.0435 22.7173C14.808 22.2086 14.6674 18.9715 14.6674 17.8376C14.68 16.761 14.8531 15.6924 15.1813 14.6659C15.4828 13.6712 15.8474 11.75 17.128 9.66962C17.5934 8.93439 18.1105 8.23269 18.6756 7.56937C19.133 7.00125 19.6248 6.46126 20.1485 5.95226C21.3028 4.7785 22.5374 3.74969 23.5509 3.29497Z" fill="#00D54B"/>
                    <path d="M41.2894 22.0405L41.1946 22.2508C41.0552 22.5732 40.897 22.8873 40.7209 23.1915C40.5658 23.4757 40.4337 23.7599 40.2873 24.0214C39.7733 25.0815 38.3693 26.0108 37.4907 26.6645C36.6121 27.3182 34.7659 27.7132 34.0194 27.8638C33.2729 28.0144 32.0957 27.9633 30.4189 27.77C28.7421 27.5768 27.094 26.224 26.4968 25.8233C25.8996 25.4225 24.7367 23.9447 24.5099 23.6974C24.2831 23.4502 23.4734 21.2362 23.3471 21.0316C23.2207 20.827 23.0599 18.9967 23.0599 18.7068C23.0599 18.417 23.3786 16.2059 23.4504 15.8932C23.7084 15.3142 24.0038 14.7522 24.3348 14.2108C24.4065 14.0772 24.4841 13.9436 24.5616 13.8129L24.6391 13.6935C24.7913 13.4377 24.909 13.2502 24.9492 13.2019L25.0985 13.0313C25.3807 12.6585 25.6918 12.3079 26.0288 11.9826C26.1723 11.8206 26.2901 11.6984 26.3417 11.6217C26.6549 11.3555 26.9922 11.1186 27.3496 10.914C28.2872 10.29 29.3308 9.83849 30.4304 9.58112C30.5535 9.53546 30.6791 9.49656 30.8065 9.4646C31.0649 9.41628 32.156 9.33955 32.4488 9.28271C32.7901 9.27621 33.1311 9.30767 33.4653 9.3765C33.8779 9.41431 34.2876 9.47983 34.6913 9.5726C36.1571 9.90334 37.5209 10.579 38.6669 11.5422C39.813 12.5054 40.7076 13.7279 41.275 15.106C41.3927 15.3454 41.4887 15.5945 41.5621 15.8506C41.9809 17.2009 42.0792 18.6287 41.8492 20.0227C41.8492 20.0767 41.8492 20.1335 41.8291 20.1875C41.7356 20.8267 41.5539 21.4502 41.2894 22.0405Z" fill="black"/>
                    <path d="M27.7342 10.6071C27.9998 10.7199 28.2473 10.8702 28.4693 11.0533L28.5554 11.13C28.8261 11.3721 29.0499 11.661 29.2158 11.9826C29.2997 12.1239 29.3634 12.276 29.4053 12.4345V12.4999C29.5419 12.976 29.5537 13.4787 29.4398 13.9607L29.4742 13.7731C29.4648 13.8516 29.4504 13.9294 29.4311 14.0061C29.3478 14.3347 29.209 14.647 29.0206 14.9298C29.0099 14.9462 29.0003 14.9633 28.9918 14.981C28.8311 15.3135 28.3889 15.6034 28.1133 15.8137C27.9652 15.9104 27.8037 15.985 27.6338 16.0353C27.0733 16.2556 26.4582 16.3013 25.8708 16.1661L25.7847 16.1433L25.8852 16.1604C25.7177 16.1374 25.5549 16.0885 25.4028 16.0154C24.85 15.7898 24.3787 15.4046 24.0505 14.9099C24.043 14.8986 24.0344 14.8881 24.0246 14.8786C24.0055 14.8509 23.9892 14.8214 23.9758 14.7905C23.8353 14.5554 23.729 14.3019 23.66 14.0374C23.6484 14.0082 23.6407 13.9776 23.637 13.9465C23.538 13.5152 23.538 13.0675 23.637 12.6363L23.6715 12.5027L23.6887 12.4203C23.7084 12.3887 23.7326 12.36 23.7605 12.335C23.9305 11.8555 24.2229 11.4277 24.6093 11.093C24.9956 10.7584 25.4629 10.5283 25.9656 10.4252L26.0374 10.4053L26.29 10.3797H26.3647C26.4479 10.3797 26.5197 10.3655 26.5542 10.357C26.6825 10.3577 26.8104 10.371 26.936 10.3968C27.0329 10.4085 27.1288 10.4265 27.2232 10.4508H27.2691L27.3552 10.4678C27.4742 10.4961 27.5898 10.5371 27.6998 10.59L27.7342 10.6071Z" fill="white"/>
                    <path d="M0.50354 19.0422V19.4173C0.974421 21.2447 1.17828 22.2252 1.84153 23.1944C4.10693 26.511 6.13115 28.904 8.37645 30.2568L11.2965 31.9165L11.9884 32.2974C14.3141 33.5706 16.2206 34.4289 18.0726 34.9546C18.6596 35.1236 19.2571 35.2547 19.8614 35.3468L20.6366 35.469L23.2752 35.9295C27.7658 36.7195 30.5969 36.9981 34.0596 36.7821C38.8746 36.478 43.0867 35.5628 48.2922 33.94C51.8152 32.8459 57.4199 28.9722 60.0872 26.0421C61.0261 25.0104 61.7841 24.2516 62.3842 23.1262L62.769 22.4128C63.1307 21.6767 64.0323 19.9317 63.9864 20.0397C64.0984 19.784 64.1816 19.7783 64.2735 19.531L64.5003 19.0393L64.4171 18.7154C63.9433 16.8823 63.4035 15.5266 62.7403 14.5546C60.4777 11.2295 58.4535 8.82513 56.2111 7.46665L54.0089 6.21048C53.5121 5.92628 53.0298 5.64207 52.7139 5.48008L52.6048 5.4204C50.282 4.14433 48.3755 3.28036 46.5264 2.75458C45.934 2.58451 45.3306 2.45443 44.7204 2.36523L43.9452 2.24018L41.3094 1.77977C36.8332 0.986849 34.0021 0.70549 30.5423 0.924325C25.7301 1.22842 21.5209 2.14639 16.3154 3.76634C12.7953 4.86905 7.1935 8.75977 4.52326 11.7013C3.52888 12.7946 2.69652 14.0224 2.05113 15.3476L1.93628 15.5891C1.56302 16.402 0.965808 17.8855 0.945709 17.9395C0.833731 18.1896 0.730367 18.4482 0.635616 18.6955L0.50354 19.0422ZM62.4589 19.6447C61.922 21.3158 60.8941 22.7368 58.6459 25.2179L57.3136 26.6815C56.9425 27.0829 56.5927 27.5032 56.2656 27.9405C55.1172 29.5065 50.4428 31.9449 46.759 33.3034C45.5898 33.7136 44.3871 34.0235 43.1642 34.2299L41.3755 34.5397L36.7815 35.3241C34.1773 35.7902 31.8171 35.7362 28.0731 35.2843L24.4381 34.8239C24.0821 34.7813 23.838 34.7614 23.4906 34.733H23.393C21.6444 34.5994 20.3035 34.1873 18.0841 33.2267L16.4676 32.519C15.7842 32.2348 15.2186 32.0103 14.6702 31.8341L14.3974 31.7488C11.6525 30.9218 5.93303 26.7355 4.17584 24.3283L3.96624 24.0441C3.04745 22.6999 2.43013 21.7705 1.8444 19.8493V19.0422L2.13153 18.1185C2.64835 16.5185 3.61882 15.1344 5.68898 12.8068L7.39736 10.9169C7.83378 10.4252 8.08071 10.1239 8.32476 9.78005C9.47325 8.20842 14.1419 5.76144 17.8228 4.39727C18.8707 4.02755 19.9471 3.74242 21.0414 3.54467L22.0377 3.37414L27.8089 2.38512C30.528 1.89914 32.9771 1.97871 36.9968 2.48743L40.1552 2.88816C40.5112 2.92795 40.7553 2.95068 41.1027 2.97626H41.2003C42.8427 3.10415 44.129 3.47646 46.1245 4.32338L48.1343 5.19872C48.8078 5.49566 49.498 5.75376 50.2016 5.97175C52.9465 6.80162 58.6602 11.0021 60.4146 13.4207L60.627 13.7219C61.5458 15.069 62.011 16.1519 62.5967 18.0844L62.7833 18.721L62.4589 19.6447Z" fill="black"/>
                    </svg>
                </div>
            </div>
            <div className="menuresp" style={{display:'none'}}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Sign In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Legal</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Licenses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Security</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Security</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Careers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Press</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Support</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Status</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Codeblog</a>
                            </li>
                        </ul>
                    </div>
                    </nav>
            </div>
        </>
    )
}

export default Header