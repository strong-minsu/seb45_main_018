import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { styled } from 'styled-components';

interface StampProps {
    isCurrentDay: boolean;
    day: string;
}

function Stamp (props: StampProps) {
    const completedMissionsCount = useSelector((state: RootState) => state.missions.completedMissionsCount);

    const fillLineColor = completedMissionsCount > 0 ? "#424243" : "#DADADA";
    const fillbackgroungColor = completedMissionsCount > 1 ? "#90DDD3" : "#E4E4E4";
    const fillMountainColor = completedMissionsCount > 2 ? "#2BB673" : "#E4E4E4";
    const fillRiverColor = completedMissionsCount > 3 ? "#55B4D2" : "#E4E4E4";
    const fillSunColor = completedMissionsCount > 4 ? "#FFDA65" : "#E4E4E4";


  return (
    <StampContainer {...props}>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90">
            <path
                className='stamp-background'
                d="M68.25 74.4182C80.8145 60.8299 80.8145 38.799 68.25 25.2107C55.6855 11.6225 35.3145 11.6225 22.75 25.2108C10.1855 38.799 10.1855 60.8299 22.75 74.4182C35.3145 88.0064 55.6855 88.0064 68.25 74.4182Z" fill={fillbackgroungColor}/>
                <path
                    className='stamp-moutain'
                    d="M77.4108 54.5153C73.8698 53.3513 61.0498 41.1723 56.6697 40.4346C50.5953 39.4114 45.5621 51.1834 45.5621 51.1834C45.5621 51.1834 36.7381 29.5933 32.3238 30.0854C25.5832 30.837 18.6974 52.837 13.5905 54.5153C15.6183 71.6213 29.1319 84.8417 45.5006 84.8417C61.8694 84.8417 75.383 71.6218 77.4108 54.5153Z" fill={fillMountainColor}/>
                <path
                    className='stamp-river'
                    d="M45.5625 50.9521C82.1186 58.2661 25.4152 61.1748 22.0863 73.401C22.2261 73.8366 22.2261 73.8366 22.2261 73.8366C28.0847 80.4744 36.3458 84.6105 45.5006 84.6105C47.0201 84.6105 48.5151 84.4958 49.9786 84.2758C49.9249 84.1921 49.9786 84.2758 49.792 84.0248C32.8103 72.3616 98.0523 52.4636 45.5625 50.9521Z" fill={fillRiverColor}/>
                <path
                    className='stamp-sun'
                    d="M50.1283 15.3789C48.3408 17.6871 47.2627 20.6598 47.2627 23.9066C47.2627 31.2461 52.7641 37.1959 59.5507 37.1959C64.7937 37.1959 69.2676 33.643 71.032 28.6431C66.0397 21.6116 58.6206 16.7023 50.1283 15.3789Z" fill={fillSunColor}/>
                <path
                    className='stamp-line'
                    d="M79.2007 49.8151C79.2007 41.5625 76.6495 33.9429 72.3576 27.8263C72.3235 27.7614 72.2853 27.6984 72.2425 27.6378C67.2721 20.6374 60.2803 15.9013 52.3887 14.1354C52.3246 14.1212 52.2604 14.1064 52.1962 14.0926C52.0219 14.0547 51.8472 14.0188 51.672 13.9838C51.55 13.9592 51.4281 13.9351 51.3057 13.912C51.1828 13.8889 51.059 13.8672 50.9357 13.8456C50.77 13.8165 50.6048 13.788 50.4383 13.7614C50.4073 13.7565 50.3768 13.7506 50.3459 13.7456C50.3377 13.7442 50.3295 13.7447 50.3209 13.7437C48.7458 13.4986 47.1367 13.3691 45.5002 13.3691C26.9179 13.3691 11.8002 29.7187 11.8002 49.8151C11.8002 51.3924 11.8935 52.9462 12.0742 54.4714C12.0751 54.4788 12.0751 54.4862 12.076 54.494C13.0089 62.3617 16.2491 69.3883 21.0015 74.8203C21.0388 74.8744 21.0784 74.927 21.1216 74.9763C27.1732 81.8325 35.2086 85.7851 43.8933 86.2197C43.9852 86.2241 44.0772 86.227 44.1691 86.231C44.3398 86.2379 44.51 86.2462 44.6815 86.2502C44.9537 86.2571 45.2267 86.261 45.5002 86.261C45.7769 86.261 46.0527 86.2571 46.328 86.2497C46.4067 86.2477 46.4855 86.2438 46.5642 86.2408C46.6461 86.2379 46.728 86.2344 46.8104 86.231C46.9214 86.2265 47.0325 86.2226 47.143 86.2167C47.2864 86.2093 47.4288 86.199 47.5713 86.1896C47.6423 86.1847 47.7133 86.1813 47.7842 86.1763C47.8248 86.1734 47.8653 86.1709 47.9058 86.1675C47.919 86.1665 47.9317 86.165 47.9444 86.164C48.1105 86.1512 48.2757 86.1355 48.4414 86.1202C48.5374 86.1114 48.6339 86.1025 48.7299 86.0922C48.8155 86.0833 48.9015 86.0759 48.987 86.0661C49.0521 86.0587 49.1163 86.0499 49.1809 86.042C49.2182 86.0376 49.2551 86.0326 49.2919 86.0282C49.3597 86.0198 49.4275 86.012 49.4953 86.0031C49.6656 85.9815 49.8353 85.9583 50.0046 85.9337C50.066 85.9249 50.1279 85.9185 50.1889 85.9096C50.2071 85.9066 50.2244 85.9012 50.2421 85.8978C56.1131 84.9996 61.5022 82.46 65.9984 78.7221C66.0116 78.7108 66.0252 78.6999 66.0384 78.6886C66.2059 78.5489 66.3724 78.4076 66.5376 78.2644C66.5881 78.2206 66.6386 78.1763 66.6892 78.1325C66.8225 78.0154 66.9554 77.8977 67.0869 77.7786C67.1743 77.6999 67.2612 77.6197 67.3477 77.5399C67.4446 77.4503 67.5415 77.3613 67.6371 77.2707C67.77 77.1452 67.902 77.0182 68.033 76.8908C68.0835 76.8415 68.1345 76.7928 68.185 76.7431C73.9227 71.0971 77.8773 63.3254 78.924 54.4935C78.9249 54.4852 78.9249 54.4773 78.9258 54.4694C79.1074 52.9452 79.2007 51.392 79.2007 49.8151ZM50.7809 17.1647C50.8101 17.1701 50.8397 17.175 50.8688 17.1804C50.9279 17.1917 50.9866 17.2041 51.0453 17.2159C51.2488 17.2562 51.4517 17.2976 51.6533 17.3423C51.6665 17.3453 51.6797 17.3483 51.6934 17.3512C58.7266 18.9182 64.8866 23.1006 69.2654 28.9125C67.4956 32.9153 63.6943 35.5459 59.5503 35.5459C53.6166 35.5459 48.7891 30.325 48.7891 23.9078C48.7895 21.4868 49.4917 19.1254 50.7809 17.1647ZM45.5007 16.6705C46.151 16.6705 46.7958 16.6952 47.4361 16.7385C46.3312 18.9237 45.7368 21.3894 45.7368 23.9068C45.7368 32.1446 51.9341 38.8468 59.5512 38.8468C64.3268 38.8468 68.747 36.1247 71.2445 31.8507C74.345 37.0297 76.148 43.1985 76.148 49.8146C76.148 50.4534 76.1293 51.0873 76.0961 51.7168C74.4078 50.5868 72.0272 48.7146 69.8479 46.9999C63.7412 42.1964 59.5417 39.0151 56.9054 38.5707C56.5796 38.5156 56.2469 38.488 55.917 38.488C53.0331 38.488 50.157 40.5295 47.3688 44.5554C46.7139 45.5013 46.1437 46.4433 45.674 47.2809C44.7794 45.2527 43.4883 42.4376 42.0261 39.5954C36.8273 29.4908 34.191 28.195 32.4749 28.195C32.3721 28.195 32.2688 28.2004 32.1673 28.2117C27.6848 28.7117 23.8034 35.8072 20.0494 42.6694C18.4066 45.6726 16.4784 49.1964 14.8815 51.1833C14.8643 50.729 14.8533 50.2738 14.8533 49.8151C14.8533 31.5392 28.6017 16.6705 45.5007 16.6705ZM66.0998 74.3355C66.0971 74.3379 66.0944 74.3409 66.0916 74.3433C65.9301 74.5023 65.7663 74.6588 65.6011 74.8143C65.5647 74.8488 65.5283 74.8828 65.4914 74.9172C65.3635 75.0363 65.2343 75.1539 65.1046 75.2711C65.0381 75.3311 64.9717 75.3912 64.9048 75.4507C64.812 75.5334 64.7178 75.6141 64.624 75.6953C64.5239 75.7819 64.4238 75.869 64.3228 75.9542C64.2827 75.9881 64.2417 76.0211 64.2017 76.0546C60.2498 79.3496 55.5479 81.6199 50.4569 82.523C48.4755 81.1071 48.4291 79.9628 48.4136 79.5804C48.283 76.2869 53.9838 71.5853 58.5642 67.807C64.1334 63.2136 68.9432 59.2463 67.7663 55.3071C67.1597 53.2759 65.1373 51.889 61.4021 50.9416C58.2807 50.1497 53.8982 49.6394 48.0559 49.3898C49.7998 46.1785 52.8625 41.7914 55.917 41.7914C56.0899 41.7914 56.2647 41.8062 56.4353 41.8347C58.5401 42.1891 64.0379 46.5137 68.0521 49.6714C71.5303 52.4073 74.0014 54.3262 75.727 55.2923C74.5702 62.784 71.0834 69.4341 66.0998 74.3355ZM44.1664 51.6193C44.1691 51.6257 44.1727 51.6311 44.175 51.6371C44.2023 51.702 44.2328 51.765 44.2674 51.8251C44.2719 51.8329 44.277 51.8403 44.2815 51.8477C44.3134 51.9008 44.3484 51.9515 44.3853 52.0008C44.3935 52.0116 44.4016 52.0229 44.4098 52.0332C44.4517 52.0854 44.4968 52.1351 44.5445 52.1814C44.5518 52.1883 44.5596 52.1952 44.5668 52.202C44.6128 52.2449 44.6615 52.2852 44.7125 52.3221C44.7179 52.3261 44.7229 52.3305 44.7284 52.3339C44.7839 52.3733 44.8426 52.4083 44.9031 52.4398C44.9109 52.4437 44.9186 52.4471 44.9263 52.4511C44.9823 52.4786 45.0401 52.5033 45.0997 52.5234C45.1061 52.5259 45.1125 52.5284 45.1193 52.5303C45.173 52.548 45.2276 52.5633 45.284 52.5746C52.6249 54.0437 55.1192 55.1575 55.9598 55.7057C55.5183 56.0242 54.5913 56.5483 52.6641 57.2811C50.4433 58.1252 47.5267 59.015 44.4394 59.957C39.6483 61.4182 34.2179 63.0749 29.8268 65.0396C25.7962 66.8433 23.1494 68.6771 21.7123 70.6871C18.4239 66.3118 16.1453 61.0161 15.2624 55.2175C17.6753 53.492 20.0208 49.2043 22.6766 44.3496C25.7293 38.7695 29.5287 31.8247 32.4745 31.4959C32.4931 31.4959 34.4199 31.6066 39.348 41.1831C41.9993 46.3345 44.145 51.5672 44.1664 51.6193ZM44.7552 82.9493C44.6601 82.9468 44.5659 82.9424 44.4713 82.9389C44.3211 82.9335 44.1709 82.9281 44.0212 82.9202C43.8992 82.9138 43.7773 82.9054 43.6558 82.8976C43.5374 82.8897 43.4196 82.8823 43.3017 82.8735C43.1602 82.8626 43.0191 82.8498 42.8785 82.837C42.7852 82.8287 42.6919 82.8198 42.5991 82.81C42.4389 82.7937 42.2787 82.776 42.119 82.7568C42.053 82.7489 41.9874 82.7406 41.9215 82.7322C41.7376 82.7086 41.5542 82.6845 41.3713 82.6574C41.3435 82.6535 41.3162 82.649 41.2889 82.6446C35.6932 81.805 30.5404 79.3161 26.2986 75.6259C26.2362 75.5713 26.173 75.5176 26.1111 75.4625C26.0219 75.3833 25.9336 75.3031 25.8449 75.2228C25.7411 75.1288 25.6369 75.0343 25.5345 74.9389C25.4763 74.8847 25.4189 74.8301 25.3611 74.776C25.2232 74.6455 25.0862 74.5146 24.9506 74.3817C24.9233 74.3552 24.8965 74.3286 24.8692 74.302C24.5088 73.9467 24.1561 73.582 23.812 73.2084C25.98 69.0187 37.5099 65.5017 45.2695 63.1349C55.1083 60.1337 59.4525 58.6759 59.3205 55.5679C59.2923 54.9075 59.0821 54.2908 58.5205 53.6933C59.3201 53.8345 60.0491 53.9891 60.7058 54.1554C64.3196 55.0723 64.8019 56.1206 64.862 56.3214C64.9276 56.5404 64.9908 57.4199 63.0585 59.5269C61.4749 61.2539 59.1621 63.1615 56.7134 65.1808C51.0358 69.8637 45.1653 74.7061 45.3641 79.7212C45.4101 80.8738 45.7669 81.9502 46.4304 82.9419C46.3994 82.9429 46.3685 82.9443 46.3376 82.9453C46.0586 82.9537 45.7801 82.9591 45.5016 82.9591C45.2513 82.9596 45.0033 82.9557 44.7552 82.9493Z" fill={fillLineColor}/>
            </svg>
        </div>
    </StampContainer>
  );
};

export default Stamp;

const StampContainer = styled.div`
    width: 90px;
    height: 90px;
`;