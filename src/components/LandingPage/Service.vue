<template>
	<div class="container">
		<div class="row">
			<div id="service">
			</div>
			<h1>Our Services</h1>
			<div class="col-md-4">
            <div class="box">
                <div class="our-services service">
                    <div class="icon"> <img src="../../../src/assets/checkup.svg"> </div>
                    <h4>Checkup Booking</h4>
                    <p>Find and book the best checkup package or service with detailed information</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box">
                <div class="our-services service">
                    <div class="icon"> <img src="../../../src/assets/treatment.svg"> </div>
                    <h4>Treatment Booking</h4>
                    <p>Find and book non-emergency treatment with the best service</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box">
                <div class="our-services service">
                    <div class="icon"> <img src="../../../src/assets/online.svg"> </div>
                    <h4>Online Consultation</h4>
                    <p>Find and book to consult with experienced doctor with the best advices and suggestions</p>
                </div>
            </div>
        </div>
		</div>
		<div class="row">
			<div class="col-md-4">
            <div class="box">
                <div class="our-services service">
                    <div class="icon"> <img src="../../../src/assets/findhospital.svg"> </div>
                    <h4>Find Hospital</h4>
                    <p>Find and check hospital with the information that is trust and helpful</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box">
                <div class="our-services service">
                    <div class="icon"> <img src="../../../src/assets/medicine.svg"> </div>
                    <h4>Medicine Listing</h4>
                    <p>Find and check the medicine which would be available in the phamacies</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box">
                <div class="our-services service">
                    <div class="icon"> <img src="../../../src/assets/content.svg"> </div>
                    <h4>Health Content</h4>
                    <p>Check and read the relevant health content which is verified from the specialists</p>
                </div>
            </div>
        </div>
		</div>
	</div>
	
</template>

<script>
export default {
	
}
</script>

<style scoped>
	h1{
		text-align: center;
		font-size: 2rem;
		color: var(--primary-color);
	}
    h4{
        font-size: 1.3rem;
    }
	#service{
		padding-top: 8rem;
	}
	.box {
    position: relative;
    width: 100%;
    padding-right: .1rem;
    padding-left: .1rem;
}
img{
    width: 5vw;
    min-height: 5rem;  
}

.our-services {
    margin-top: 75px;
    padding-bottom: 30px;
    padding: 0 1rem;
    min-height: 10rem;
    text-align: center;
    border-radius: 10px;
    background-color: #fff;
    transition: all .4s ease-in-out;
    box-shadow: 0 0 10px 0 rgba(79, 80, 80, 0.1);
}

.our-services .icon {
    margin-bottom: -21px;
    transform: translateY(-50%);
    text-align: center
}

.our-services:hover h4,
.our-services:hover p {
    color: #fff
}

.service:hover {
    box-shadow: 0 0 25px 0 rgba(20, 27, 201, .05);
    cursor: pointer;
    background: var(--primary-color);
}

.settings:hover {
    box-shadow: 0 0 25px 0 rgba(20, 27, 201, .05);
    cursor: pointer;
    background-image: linear-gradient(-45deg, #34b5bf 0%, #210c59 100%)
}

.privacy:hover {
    box-shadow: 0 0 25px 0 rgba(20, 27, 201, .05);
    cursor: pointer;
    background-image: linear-gradient(-45deg, #3615e7 0%, #44a2f6 100%)
}

.backups:hover {
    box-shadow: 0 0 25px 0 rgba(20, 27, 201, .05);
    cursor: pointer;
    background-image: linear-gradient(-45deg, #fc6a0e 0%, #fdb642 100%)
}

.ssl:hover {
    box-shadow: 0 0 25px 0 rgba(20, 27, 201, .05);
    cursor: pointer;
    background-image: linear-gradient(-45deg, #8d40fb 0%, #5a57fb 100%)
}

.database:hover {
    box-shadow: 0 0 25px 0 rgba(20, 27, 201, .05);
    cursor: pointer;
    background-image: linear-gradient(-45deg, #27b88d 0%, #22dd73 100%)
}
	@media screen and (max-device-width: 767px){
		.row{
			height: auto;
		}
        img{
            width: 20vw;
        }

	}
</style>