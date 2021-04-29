<template>
  <mdb-footer color="indigo" class="font-small pt-0">
    <mdb-container>
      <mdb-row>
        <mdb-col md="10">
          <div class="form-icons">      
            <li>
              <a href="https://www.facebook.com/henrique.hoinacki" target="_blank" style="color:#fff" >
              <b-icon icon="facebook"  scale="2" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Henrique-Hoi-Dev" target="_blank"  style="color:#fff">
              <b-icon icon="github"  scale="2" aria-hidden="true" />
              </a>  
            </li>
            <li>
              <a href="https://www.linkedin.com/in/henrique-hoinacki-a98b851a5/"  target="_blank" style="color:#fff">
              <b-icon icon="linkedin"  scale="2" aria-hidden="true" />
              </a>
            </li>
            <li>
              <img src="../assets/rocketseat.png" alt="rockeseat">
              <a href="https://app.rocketseat.com.br/me/henrique-hoinacki-1591931998" target="_blank"> rocketseat.com.br/me/henrique-hoinacki</a>
            </li>
          </div>
        </mdb-col>
        <mdb-col md="10">
          In addition to my social networks if you want to talk to me exchange an idea has my contacts
        </mdb-col>
        <mdb-col md="10">
          <div class="form-icons">
            <li>
                <b-icon icon="envelope"  scale="2" aria-hidden="true" /> riqueah@gmail.com
            </li>
            <li>
                <b-icon icon="telephone"  scale="2" aria-hidden="true" /> 55 (46) 9 9119-5068 
            </li>
          </div>
        </mdb-col >
      </mdb-row>
    </mdb-container>
      <div class="footer-copyright text-center py-3">
          &copy; 2021 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
      </div>
  </mdb-footer>
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';

export default {
 components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    }
}
</script>

<style scoped>
li {
  margin: 30px;
  list-style-type: none;
}
svg {
  margin-right: 10px;
}
img {
  margin-right: 3px;
}
.form-icons {
  display: flex;
  flex-direction: row;
}
.pt-0, .py-0 {
    padding-top: 0!important;
    width: 100%;
}
footer.page-footer .footer-copyright {
    overflow: hidden;
    color: rgba(255,255,255,0.6);
    background-color: rgba(0,0,0,0.2);
}
@media (max-width: 800px) {
.form-icons {
  display: flex;
  flex-direction: column;
  }
}
</style>
