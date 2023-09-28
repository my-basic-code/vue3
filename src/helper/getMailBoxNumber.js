import { ref } from "vue";

/**
 * Generates a function comment for the given function body.
 *
 * @return {Object} An object containing the handlerSearchAddress function and the dataGetAddress object
 */
export default function useGetAddress() {
  const dataGetAddress = ref({
    zip: '',
    address: '',
    detailAddress: '',
  });

  const handlerSearchAddress = async () => {
    await new window.daum.Postcode({
      oncomplete: (data) => {
        const roadAddr = data.roadAddress; // 도로명 주소 변수
        let extraRoadAddr = ""; // 참고 항목 변수
        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
          extraRoadAddr += data.bname;
        }
        if (data.buildingName !== "" && data.apartment === "Y") {
          extraRoadAddr +=
            extraRoadAddr !== "" ? ", " + data.buildingName : data.buildingName;
        }
        if (extraRoadAddr !== "") {
          extraRoadAddr = " (" + extraRoadAddr + ")";
        }
        dataGetAddress.value.zip = data.zonecode;
        dataGetAddress.value.address = data.jibunAddress;
        dataGetAddress.value.detailAddress = `(${data.zonecode}) ${!!roadAddr ? roadAddr : data.jibunAddress
          }`;
      },
    }).open();
  };
  return {
    handlerSearchAddress,
    dataGetAddress
  }
}
