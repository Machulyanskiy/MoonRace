let isLoading = true;
const loadingRider = $('#pre-loader-rider');
let loadingRotationStr;
let loadingRotation = 0;

const loading = window.setInterval(function() {
    loadingRotation += 5;
    rotateRider(loadingRider, loadingRotation, loadingRotationStr);
  }, 39);
  
function rotateRider(rider, rotationDeg, rotationStr) {
	rotationStr = `rotate(${rotationDeg}deg)`;
	rider.css({
		"-webkit-transform": rotationStr,
		"-moz-transform": rotationStr,
		"-ms-transform": rotationStr,
		"-o-transfrom": rotationStr,
		"transform": rotationStr
	});
}