'use client';

import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from '@/app/lib/actions';
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function RegisterForm() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

   return(
<div>
   <form action={dispatch} className="space-y-3">
      <div className="flex-1">
        <h1 className= "mb-3 text-2xl">
          Create your account
        </h1>
        <div className="w-full">
        <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium"
              htmlFor="firstName"
            >
              First Name
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="firstName"
                type="firstName"
                name="firstName"
                placeholder="Enter your first name"
                required
              />
            </div>
          </div>
        <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="lastName"
                type="lastName"
                name="lastName"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium"
              htmlFor="username"
            >
              Username
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="username"
                type="username"
                name="lusername"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium"
              htmlFor="address"
            >
              Address
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="address"
                type="address"
                name="address"
                placeholder="Enter your address"
                required
              />
            </div>
          </div>
        </div>
        <div
          className="flex h-8 items-end space-x-1 center"
          aria-live="polite"
          aria-atomic="true"
        >
        </div>
        <div className="flex h-8 items-end space-x-1">
        </div>
      </div>
      <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium"
              htmlFor="country"
            >
              Country
            </label>
          </div>
    </form>  
    <Select>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
        <SelectItem value="AF">Afghanistan</SelectItem>
        <SelectItem value="AL">Albania</SelectItem>
        <SelectItem value="DZ">Algeria</SelectItem>
        <SelectItem value="AS">American Samoa</SelectItem>
        <SelectItem value="AD">Andorra</SelectItem>
        <SelectItem value="AG">Angola</SelectItem>
        <SelectItem value="AI">Anguilla</SelectItem>
        <SelectItem value="AG">Antigua & Barbuda</SelectItem>
        <SelectItem value="AR">Argentina</SelectItem>
        <SelectItem value="AA">Armenia</SelectItem>
        <SelectItem value="AW">Aruba</SelectItem>
        <SelectItem value="AU">Australia</SelectItem>
        <SelectItem value="AT">Austria</SelectItem>
        <SelectItem value="AZ">Azerbaijan</SelectItem>
        <SelectItem value="BS">Bahamas</SelectItem>
        <SelectItem value="BH">Bahrain</SelectItem>
        <SelectItem value="BD">Bangladesh</SelectItem>
        <SelectItem value="BB">Barbados</SelectItem>
        <SelectItem value="BY">Belarus</SelectItem>
        <SelectItem value="BE">Belgium</SelectItem>
        <SelectItem value="BZ">Belize</SelectItem>
        <SelectItem value="BJ">Benin</SelectItem>
        <SelectItem value="BM">Bermuda</SelectItem>
        <SelectItem value="BT">Bhutan</SelectItem>
        <SelectItem value="BO">Bolivia</SelectItem>
        <SelectItem value="BL">Bonaire</SelectItem>
        <SelectItem value="BA">Bosnia and Herzegovina</SelectItem>
        <SelectItem value="BW">Botswana</SelectItem>
        <SelectItem value="BR">Brazil</SelectItem>
        <SelectItem value="BC">British Indian Ocean Ter</SelectItem>
        <SelectItem value="BN">Brunei</SelectItem>
        <SelectItem value="BG">Bulgaria</SelectItem>
        <SelectItem value="BF">Burkina Faso</SelectItem>
        <SelectItem value="BI">Burundi</SelectItem>
        <SelectItem value="KH">Cambodia</SelectItem>
        <SelectItem value="CM">Cameroon</SelectItem>
        <SelectItem value="CA">Canada</SelectItem>
        <SelectItem value="IC">Canary Islands</SelectItem>
        <SelectItem value="CV">Cape Verde</SelectItem>
        <SelectItem value="KY">Cayman Islands</SelectItem>
        <SelectItem value="CF">Central African Republic</SelectItem>
        <SelectItem value="TD">Chad</SelectItem>
        <SelectItem value="CD">Channel Islands</SelectItem>
        <SelectItem value="CL">Chile</SelectItem>
        <SelectItem value="CN">China</SelectItem>
        <SelectItem value="CI">Christmas Island</SelectItem>
        <SelectItem value="CS">Cocos Island</SelectItem>
        <SelectItem value="CO">Colombia</SelectItem>
        <SelectItem value="CC">Comoros</SelectItem>
        <SelectItem value="CG">Congo</SelectItem>
        <SelectItem value="CK">Cook Islands</SelectItem>
        <SelectItem value="CR">Costa Rica</SelectItem>
        <SelectItem value="CT">Cote D'Ivoire</SelectItem>
        <SelectItem value="HR">Croatia</SelectItem>
        <SelectItem value="CU">Cuba</SelectItem>
        <SelectItem value="CB">Curacao</SelectItem>
        <SelectItem value="CY">Cyprus</SelectItem>
        <SelectItem value="CZ">Czech Republic</SelectItem>
        <SelectItem value="DK">Denmark</SelectItem>
        <SelectItem value="DJ">Djibouti</SelectItem>
        <SelectItem value="DM">Dominica</SelectItem>
        <SelectItem value="DO">Dominican Republic</SelectItem>
        <SelectItem value="TM">East Timor</SelectItem>
        <SelectItem value="EC">Ecuador</SelectItem>
        <SelectItem value="EG">Egypt</SelectItem>
        <SelectItem value="SV">El Salvador</SelectItem>
        <SelectItem value="GQ">Equatorial Guinea</SelectItem>
        <SelectItem value="ER">Eritrea</SelectItem>
        <SelectItem value="EE">Estonia</SelectItem>
        <SelectItem value="ET">Ethiopia</SelectItem>
        <SelectItem value="FA">Falkland Islands</SelectItem>
        <SelectItem value="FO">Faroe Islands</SelectItem>
        <SelectItem value="FJ">Fiji</SelectItem>
        <SelectItem value="FI">Finland</SelectItem>
        <SelectItem value="FR">France</SelectItem>
        <SelectItem value="GF">French Guiana</SelectItem>
        <SelectItem value="PF">French Polynesia</SelectItem>
        <SelectItem value="FS">French Southern Ter</SelectItem>
        <SelectItem value="GA">Gabon</SelectItem>
        <SelectItem value="GM">Gambia</SelectItem>
        <SelectItem value="GE">Georgia</SelectItem>
        <SelectItem value="DE">Germany</SelectItem>
        <SelectItem value="GH">Ghana</SelectItem>
        <SelectItem value="GI">Gibraltar</SelectItem>
        <SelectItem value="GB">Great Britain</SelectItem>
        <SelectItem value="GR">Greece</SelectItem>
        <SelectItem value="GL">Greenland</SelectItem>
        <SelectItem value="GD">Grenada</SelectItem>
        <SelectItem value="GP">Guadeloupe</SelectItem>
        <SelectItem value="GU">Guam</SelectItem>
        <SelectItem value="GT">Guatemala</SelectItem>
        <SelectItem value="GN">Guinea</SelectItem>
        <SelectItem value="GY">Guyana</SelectItem>
        <SelectItem value="HT">Haiti</SelectItem>
        <SelectItem value="HW">Hawaii</SelectItem>
        <SelectItem value="HN">Honduras</SelectItem>
        <SelectItem value="HK">Hong Kong</SelectItem>
        <SelectItem value="HU">Hungary</SelectItem>
        <SelectItem value="IS">Iceland</SelectItem>
        <SelectItem value="IN">India</SelectItem>
        <SelectItem value="ID">Indonesia</SelectItem>
        <SelectItem value="IA">Iran</SelectItem>
        <SelectItem value="IQ">Iraq</SelectItem>
        <SelectItem value="IR">Ireland</SelectItem>
        <SelectItem value="IM">Isle of Man</SelectItem>
        <SelectItem value="IL">Israel</SelectItem>
        <SelectItem value="IT">Italy</SelectItem>
        <SelectItem value="JM">Jamaica</SelectItem>
        <SelectItem value="JP">Japan</SelectItem>
        <SelectItem value="JO">Jordan</SelectItem>
        <SelectItem value="KZ">Kazakhstan</SelectItem>
        <SelectItem value="KE">Kenya</SelectItem>
        <SelectItem value="KI">Kiribati</SelectItem>
        <SelectItem value="NK">Korea North</SelectItem>
        <SelectItem value="KS">Korea South</SelectItem>
        <SelectItem value="KW">Kuwait</SelectItem>
        <SelectItem value="KG">Kyrgyzstan</SelectItem>
        <SelectItem value="LA">Laos</SelectItem>
        <SelectItem value="LV">Latvia</SelectItem>
        <SelectItem value="LB">Lebanon</SelectItem>
        <SelectItem value="LS">Lesotho</SelectItem>
        <SelectItem value="LR">Liberia</SelectItem>
        <SelectItem value="LY">Libya</SelectItem>
        <SelectItem value="LI">Liechtenstein</SelectItem>
        <SelectItem value="LT">Lithuania</SelectItem>
        <SelectItem value="LU">Luxembourg</SelectItem>
        <SelectItem value="MO">Macau</SelectItem>
        <SelectItem value="MK">Macedonia</SelectItem>
        <SelectItem value="MG">Madagascar</SelectItem>
        <SelectItem value="MY">Malaysia</SelectItem>
        <SelectItem value="MW">Malawi</SelectItem>
        <SelectItem value="MV">Maldives</SelectItem>
        <SelectItem value="ML">Mali</SelectItem>
        <SelectItem value="MT">Malta</SelectItem>
        <SelectItem value="MH">Marshall Islands</SelectItem>
        <SelectItem value="MQ">Martinique</SelectItem>
        <SelectItem value="MR">Mauritania</SelectItem>
        <SelectItem value="MU">Mauritius</SelectItem>
        <SelectItem value="ME">Mayotte</SelectItem>
        <SelectItem value="MX">Mexico</SelectItem>
        <SelectItem value="MI">Midway Islands</SelectItem>
        <SelectItem value="MD">Moldova</SelectItem>
        <SelectItem value="MC">Monaco</SelectItem>
        <SelectItem value="MN">Mongolia</SelectItem>
        <SelectItem value="MS">Montserrat</SelectItem>
        <SelectItem value="MA">Morocco</SelectItem>
        <SelectItem value="MZ">Mozambique</SelectItem>
        <SelectItem value="MM">Myanmar</SelectItem>
        <SelectItem value="NA">Nambia</SelectItem>
        <SelectItem value="NU">Nauru</SelectItem>
        <SelectItem value="NP">Nepal</SelectItem>
        <SelectItem value="NL">Netherlands</SelectItem>
        <SelectItem value="NV">Nevis</SelectItem>
        <SelectItem value="NC">New Caledonia</SelectItem>
        <SelectItem value="NZ">New Zealand</SelectItem>
        <SelectItem value="NI">Nicaragua</SelectItem>
        <SelectItem value="NE">Niger</SelectItem>
        <SelectItem value="NG">Nigeria</SelectItem>
        <SelectItem value="NW">Niue</SelectItem>
        <SelectItem value="NF">Norfolk Island</SelectItem>
        <SelectItem value="NO">Norway</SelectItem>
        <SelectItem value="OM">Oman</SelectItem>
        <SelectItem value="PK">Pakistan</SelectItem>
        <SelectItem value="PW">Palau Island</SelectItem>
        <SelectItem value="PS">Palestine</SelectItem>
        <SelectItem value="PA">Panama</SelectItem>
        <SelectItem value="PG">Papua New Guinea</SelectItem>
        <SelectItem value="PY">Paraguay</SelectItem>
        <SelectItem value="PE">Peru</SelectItem>
        <SelectItem value="PH">Philippines</SelectItem>
        <SelectItem value="PO">Pitcairn Island</SelectItem>
        <SelectItem value="PL">Poland</SelectItem>
        <SelectItem value="PT">Portugal</SelectItem>
        <SelectItem value="PR">Puerto Rico</SelectItem>
        <SelectItem value="QA">Qatar</SelectItem>
        <SelectItem value="ME">Republic of Montenegro</SelectItem>
        <SelectItem value="RS">Republic of Serbia</SelectItem>
        <SelectItem value="RE">Reunion</SelectItem>
        <SelectItem value="RO">Romania</SelectItem>
        <SelectItem value="RU">Russia</SelectItem>
        <SelectItem value="RW">Rwanda</SelectItem>
        <SelectItem value="NT">St Barthelemy</SelectItem>
        <SelectItem value="EU">St Eustatius</SelectItem>
        <SelectItem value="HE">St Helena</SelectItem>
        <SelectItem value="KN">St Kitts-Nevis</SelectItem>
        <SelectItem value="LC">St Lucia</SelectItem>
        <SelectItem value="MB">St Maarten</SelectItem>
        <SelectItem value="PM">St Pierre and Miquelon</SelectItem>
        <SelectItem value="VC">St Vincent and Grenadines</SelectItem>
        <SelectItem value="SP">Saipan</SelectItem>
        <SelectItem value="SO">Samoa</SelectItem>
        <SelectItem value="AS">Samoa American</SelectItem>
        </SelectContent>
    </Select>
    <div className="space-y-3">
        <ResgisterButton />
        <AlreadyHaveAnAccountLink />
    </div>
</div>
  );
       
}



export function ResgisterButton(){
    const {pending} = useFormStatus();

    return (
        <Button className="mt-4 w-full">
            Submit</Button>
    )
}

export function AlreadyHaveAnAccountLink(){
    return (
        <a href="/pages/login">
            <Button className="mt-4 w-full" variant="link"> 
                 Already have an account? Click here </Button>
        </a>
    )
}