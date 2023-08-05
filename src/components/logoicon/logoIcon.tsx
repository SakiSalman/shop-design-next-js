import React from 'react'

type Props = {
  width? : string,
  height? : string
  tw? : string
  iw? : string
  ih? : string
}

const Icon = (p: Props) => {
  const width = p.width ? p.width : 'w-10'
  const height = p.height ? p.height : 'h-10'
  
  return (
    <div className={`${width} ${height} rounded-full bg-pc flex justify-center items-center`}>
    <svg width={p.iw? p.iw : '30'} height={p.ih ? p.ih : '30'} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_419)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.69358 4.62638L5.69176 5.41698H6.29886L6.30069 4.37349H7.6984L7.69932 5.21705V5.25448L7.70114 7.46836H8.30825L8.30734 6.52621H8.30642V5.27822L8.30551 4.62638H8.3046V3.74904V3.51533L8.30277 3.41947C8.29547 3.14832 8.28086 2.55765 8.6077 2.10757C8.80033 1.84282 9.05138 1.64471 9.32892 1.51872C9.56172 1.41373 9.8146 1.35804 10.0684 1.35622C10.1451 1.59815 10.1707 1.8556 10.1424 2.11031C10.1086 2.41341 9.99811 2.71285 9.80548 2.97852C9.58546 3.28161 9.32435 3.47333 9.0313 3.58927C8.88979 3.64588 8.73916 3.68605 8.58031 3.71343V4.32784C8.81493 4.29407 9.04043 4.23838 9.25497 4.15347C9.65301 3.99553 10.0054 3.739 10.2985 3.33548C10.555 2.98217 10.702 2.58139 10.7467 2.17513C10.7924 1.757 10.7285 1.33066 10.5605 0.942656L10.4893 0.777414L10.3094 0.760981C9.88855 0.721724 9.46403 0.792021 9.07969 0.96548C8.70721 1.13346 8.37216 1.39821 8.11562 1.75152C7.66919 2.36593 7.68836 3.09902 7.69658 3.43499L7.6984 3.51624V3.76456H6.3016L6.30252 3.51624L6.30434 3.43499C6.31256 3.09902 6.33173 2.36593 5.8853 1.75152C5.62877 1.3973 5.29372 1.13346 4.92124 0.96548C4.53689 0.792021 4.11146 0.720811 3.6915 0.760981L3.51074 0.777414L3.43953 0.942656C3.27155 1.33066 3.20673 1.757 3.25329 2.17513C3.29802 2.5823 3.44592 2.98217 3.70246 3.33548C3.99551 3.739 4.34791 3.99462 4.74595 4.15347C4.96049 4.23838 5.18599 4.29407 5.42061 4.32784V3.71343C5.26268 3.68605 5.11113 3.64588 4.96962 3.58927C4.67657 3.47242 4.41547 3.28161 4.19545 2.97852C4.00282 2.71285 3.89144 2.41341 3.85857 2.11031C3.83027 1.8556 3.85583 1.59815 3.93252 1.35622C4.18632 1.35804 4.43829 1.41373 4.672 1.51872C4.95045 1.64471 5.2006 1.8419 5.39323 2.10757C5.72006 2.55765 5.70545 3.14832 5.69815 3.41947L5.69632 3.51533V3.63218V4.62638H5.69358Z" fill="#333333" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.37275 5.69356L8.58214 5.69173V6.29884L9.62563 6.30067V7.69838L8.78208 7.69929H8.74465L6.53076 7.70112V8.30822L7.472 8.30731V8.3064H8.72L9.37184 8.30549V8.30457H10.2492H10.482L10.5778 8.30275C10.849 8.29544 11.4397 8.28084 11.8897 8.60767C12.1545 8.8003 12.3526 9.05136 12.4786 9.32889C12.5836 9.56169 12.6393 9.81458 12.6411 10.0684C12.3992 10.1442 12.1417 10.1697 11.887 10.1423C11.5839 10.1085 11.2845 9.99808 11.0188 9.80545C10.7157 9.58543 10.5249 9.32433 10.408 9.03127C10.3514 8.88977 10.3113 8.73913 10.2839 8.58028H9.66946C9.70323 8.81491 9.75892 9.0404 9.84383 9.25495C10.0018 9.65299 10.2583 10.0054 10.6618 10.2984C11.0151 10.555 11.4159 10.7029 11.8222 10.7476C12.2403 10.7933 12.6666 10.7293 13.0546 10.5614L13.2199 10.4902L13.2363 10.3103C13.2756 9.88944 13.2053 9.46492 13.0318 9.08057C12.8638 8.70809 12.5991 8.37304 12.2458 8.11651C11.6314 7.67008 10.8983 7.68925 10.5623 7.69747L10.4811 7.69929H10.2327V6.30249L10.4811 6.3034L10.5623 6.30523C10.8983 6.31345 11.6314 6.33262 12.2458 5.88619C12.6 5.62874 12.8638 5.2946 13.0318 4.92212C13.2053 4.53777 13.2765 4.11234 13.2363 3.69239L13.2199 3.51254L13.0546 3.44133C12.6666 3.27335 12.2403 3.20853 11.8222 3.25509C11.415 3.29983 11.0151 3.44772 10.6618 3.70426C10.2583 3.99731 10.0027 4.34971 9.84383 4.74775C9.75892 4.96229 9.70323 5.18779 9.66946 5.42242H10.2839C10.3113 5.26448 10.3514 5.11293 10.408 4.97142C10.524 4.67837 10.7157 4.41727 11.0188 4.19633C11.2845 4.0037 11.5839 3.89232 11.887 3.85946C12.1417 3.83116 12.3992 3.85672 12.6411 3.93341C12.6393 4.1872 12.5836 4.43918 12.4786 4.67289C12.3526 4.95134 12.1545 5.20148 11.8897 5.39411C11.4397 5.72095 10.849 5.70634 10.5778 5.69904L10.482 5.69721H10.3651H9.37275V5.69356Z" fill="#333333" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.30643 9.37275L8.30825 8.58214H7.70115L7.69932 9.62564H6.30161L6.30069 8.78208V8.74465L6.29887 6.53076H5.69176L5.69268 7.47292H5.69359V8.72091L5.6945 9.37275H5.69541V10.2501V10.4838L5.69724 10.5797C5.70454 10.8508 5.71915 11.4415 5.39232 11.8916C5.19969 12.1563 4.94863 12.3544 4.67109 12.4804C4.43829 12.5854 4.18541 12.6411 3.93161 12.6429C3.85584 12.401 3.83027 12.1435 3.85766 11.8888C3.89144 11.5857 4.00191 11.2863 4.19454 11.0206C4.41456 10.7175 4.67566 10.5258 4.96871 10.4099C5.11022 10.3532 5.26085 10.3131 5.41971 10.2857V9.67128C5.18508 9.70506 4.95958 9.76075 4.74504 9.84565C4.347 10.0036 3.9946 10.2601 3.70155 10.6637C3.44501 11.017 3.29712 11.4177 3.25238 11.824C3.20674 12.2421 3.27064 12.6685 3.43862 13.0565L3.50983 13.2217L3.68968 13.2381C4.11055 13.2774 4.53507 13.2071 4.91941 13.0336C5.29189 12.8657 5.62694 12.6009 5.88348 12.2467C6.32991 11.6323 6.31074 10.8992 6.30252 10.5632L6.30069 10.482V10.2337H7.69658L7.69567 10.482L7.69384 10.5632C7.68563 10.8992 7.66646 11.6323 8.11288 12.2467C8.37033 12.6009 8.70538 12.8648 9.07695 13.0336C9.4613 13.2071 9.88673 13.2774 10.3067 13.2381L10.4865 13.2217L10.5577 13.0565C10.7257 12.6685 10.7905 12.2421 10.744 11.824C10.6992 11.4168 10.5514 11.017 10.2948 10.6637C10.0018 10.2601 9.64937 10.0045 9.25132 9.84565C9.03678 9.76075 8.81129 9.70506 8.57666 9.67128V10.2857C8.7346 10.3131 8.88615 10.3532 9.02765 10.4099C9.32071 10.5267 9.58181 10.7175 9.80183 11.0206C9.99446 11.2863 10.1058 11.5857 10.1387 11.8888C10.167 12.1435 10.1414 12.401 10.0648 12.6429C9.81096 12.6402 9.55898 12.5854 9.32527 12.4804C9.04682 12.3544 8.79668 12.1572 8.60405 11.8916C8.27721 11.4415 8.29273 10.8508 8.29912 10.5797L8.30095 10.4838V10.3669V9.37275H8.30643Z" fill="#333333" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.62644 8.3064L5.41705 8.30823V7.70112L4.37356 7.6993V6.30158L5.21711 6.30067H5.25455L7.46843 6.29884V5.69174L6.52627 5.69265V5.69356H5.27828L4.62644 5.69448V5.69539H3.7491H3.51539L3.41953 5.69722C3.14839 5.70452 2.55771 5.71913 2.10763 5.39229C1.84288 5.19966 1.64477 4.9486 1.51879 4.67107C1.4138 4.43827 1.35811 4.18538 1.35628 3.93159C1.59821 3.85581 1.85566 3.83025 2.11037 3.85764C2.41347 3.8905 2.71291 4.00188 2.97858 4.19451C3.28168 4.41453 3.4734 4.67655 3.58934 4.9696C3.64594 5.11111 3.68611 5.26174 3.7135 5.42059H4.32791C4.29413 5.18597 4.23844 4.96047 4.15354 4.74593C3.9956 4.34789 3.73906 3.99549 3.33554 3.70244C2.98223 3.4459 2.58145 3.29892 2.17519 3.25418C1.75706 3.20854 1.33072 3.27244 0.94272 3.44042L0.777478 3.51072L0.761045 3.69057C0.721788 4.11144 0.792085 4.53595 0.965544 4.9203C1.13353 5.29278 1.39828 5.62783 1.75159 5.88437C2.366 6.3308 3.09909 6.31163 3.43505 6.30341L3.5163 6.30158H3.76462V7.69747H3.5163L3.43505 7.69564C3.09909 7.68743 2.366 7.66826 1.75159 8.11469C1.39737 8.37122 1.13353 8.70627 0.965544 9.07875C0.792085 9.4631 0.721788 9.88853 0.761045 10.3085L0.777478 10.4883L0.94272 10.5595C1.33072 10.7275 1.75706 10.7923 2.17519 10.7458C2.58236 10.701 2.98223 10.5532 3.33554 10.2966C3.73906 10.0036 3.99469 9.65117 4.15354 9.25312C4.23844 9.03858 4.29413 8.81309 4.32791 8.57846H3.7135C3.68611 8.7364 3.64594 8.88795 3.58934 9.02945C3.47248 9.32251 3.28168 9.58361 2.97858 9.80363C2.71291 9.99626 2.41347 10.1076 2.11037 10.1405C1.85566 10.1688 1.59821 10.1432 1.35628 10.0666C1.35811 9.81276 1.4138 9.56078 1.51879 9.32707C1.64477 9.04862 1.84197 8.79848 2.10763 8.60585C2.55771 8.27902 3.14839 8.29362 3.41953 8.30093L3.51539 8.30275H3.63225H4.62644V8.3064Z" fill="#333333" />
      </g>
      <defs>
        <clipPath id="clip0_17_419">
          <rect width="12.5" height="12.5" fill="white" transform="translate(0.75 0.75)" />
        </clipPath>
      </defs>
    </svg>
  </div>
  )
}

export default Icon