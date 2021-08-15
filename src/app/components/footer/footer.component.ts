import { EventEmitter } from '@angular/core';
import {
  Component,
  HostBinding,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { ANCHORS } from 'src/app/types';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent {
  @HostBinding('class')
  get class() {
    return 'footer';
  }

  @Output()
  onGoTop = new EventEmitter<ANCHORS>();

  listing = JSON.parse(
    '["Project Name: Residensi M Oscar Petaling","Developer: Mah Sing Properties Sdn. Bhd. (264979-M)","Registered address: Wisma Mah Sing, Penthouse Suite 1, No. 163, Jalan Sungai Besi, 57100 Kuala Lumpur","Tel: 03-9221 8888","Developer License No.: 5911-31/09-2021/0876(L)","Validity: 27/09/2019 - 26/09/2021","Advertising Permit No.: 5911-31/09-2021/0876(P)","Validity: 27/09/2019 - 26/09/2021","Authority Approving Building Plan: Dewan Bandaraya Kuala Lumpur","Building Plan Reference No.: BP S3 OSC 2019 1003","Expected Date of Completion: September 2023","Land Encumbrance: Public Bank Berhad","Land Tenure: Freehold","Property Type: Apartment Suites","South Tower - Type A: 153 units, Min RM470,000 – Max RM710,000, 2 car parks ; Type B: 186 units, Min RM600,000 – Max RM915,000, 2 car parks ; Type C: 93 units, Min RM750,000 – Max RM1,100,000, 3 - 4 car parks","Price: RM470,000 (Min) – RM1,100,000 (Maks)","North Tower - Type A: 190 units, Min RM510,000 – Max RM750,000, 2 car parks ; Type B: 192 units, Min RM640,000 – Max RM935,000, 2 car parks ; Type D: 96 units, Min RM882,000 – Max RM1,300,000, 3 - 4 car parks","Price: RM510,000 (Min) – RM1,300,000 (Max)","Total unit: 910 unit (Min RM470,000 – Max RM1,300,000)","This advertisement has been approved by Jabatan Perumahan Negara. The information contained in this material is subject to change and cannot form part of an offer or contract. All renderings are artist\'s impressions only. All measurements are approximate. While every reasonable care has been taken in preparing this material, the developer cannot be held responsible for any inaccuracy. All the above items are subject to variations, modifications and substitutions as may be required by the Authorities or recommended by the Architect or Engineer."]'
  );

  socials = [
    {
      id: 'facebook',
      url: 'https://www.facebook.com/mahsing/',
      color: '#1877f2'
    },
    {
      id: 'instagram',
      url: 'https://www.instagram.com/mahsinggroup/',
      color: '#e14663'
    },
    {
      id: 'youtube',
      url: 'https://www.youtube.com/user/MahSingGroup',
      color: '#f00'
    },
    {
      id: 'linkedin',
      url: 'https://www.linkedin.com/company/mah-sing-group-berhad/',
      color: '#0a66c2'
    }
  ];

  goTop(e: Event) {
    e.preventDefault();
    this.onGoTop.emit(ANCHORS.TOP);
  }
}
