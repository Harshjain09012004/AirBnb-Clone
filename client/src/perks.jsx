import React from 'react'
import { SlScreenDesktop } from "react-icons/sl";
import { HiOutlineRadio } from "react-icons/hi2";
import { FaCarSide } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { BsDoorClosed } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { BiCctv } from "react-icons/bi";
import { RiCustomerService2Line } from "react-icons/ri";

export const Perks = (props) => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3 className="font-bold text-2xl">Perks</h3>
        <h4>Perks included during stay</h4>
      </div>

      <div className=" grid grid-rows-3 grid-cols-3 h-36 gap-4 w-[50%] text-lg ">
        <div className="flex gap-3 place-items-center border px-3 rounded-md shadow-sm">
          <input
            type="checkbox"
            name="tv"
            checked={props.perks.tv}
            onChange={() => {
              props.setperks({ ...props.perks, tv: !props.perks.tv });
            }}
          />
          <SlScreenDesktop />
          <p className="font-semibold">TV</p>
        </div>

        <div className="flex gap-3 place-items-center border px-3 rounded-md shadow-sm">
          <input
            type="checkbox"
            name="radio"
            checked={props.perks.radio}
            onChange={() => {
              props.setperks({ ...props.perks, radio: !props.perks.radio });
            }}
          />
          <HiOutlineRadio />
          <p className="font-semibold">Radio</p>
        </div>

        <div className="flex gap-3 place-items-center border px-3 rounded-md shadow-sm">
          <input
            type="checkbox"
            name="parking"
            checked={props.perks.parking}
            onChange={() => {
              props.setperks({ ...props.perks, parking: !props.perks.parking });
            }}
          />
          <FaCarSide />
          <p className="font-semibold">Parking</p>
        </div>

        <div className="flex gap-3 place-items-center border px-3 rounded-md shadow-sm">
          <input
            type="checkbox"
            name="wifi"
            checked={props.perks.wifi}
            onChange={() => {
              props.setperks({ ...props.perks, wifi: !props.perks.wifi });
            }}
          />
          <FaWifi />
          <p className="font-semibold">WiFi</p>
        </div>

        <div className="flex gap-3 place-items-center border px-3 rounded-md shadow-sm">
          <input
            type="checkbox"
            name="pets"
            checked={props.perks.pets}
            onChange={() => {
              props.setperks({ ...props.perks, pets: !props.perks.pets });
            }}
          />
          <MdPets />
          <p className="font-semibold">Pets</p>
        </div>

        <div className="flex gap-3 place-items-center border px-3 rounded-md shadow-sm">
          <input
            type="checkbox"
            name="service"
            checked={props.perks.service}
            onChange={() => {
              props.setperks({ ...props.perks, service: !props.perks.service });
            }}
          />
          <RiCustomerService2Line />
          <p className="font-semibold">Support</p>
        </div>

        <div className="flex gap-3 place-items-center border px-3 rounded-md shadow-sm">
          <input
            type="checkbox"
            name="food"
            checked={props.perks.food}
            onChange={() => {
              props.setperks({ ...props.perks, food: !props.perks.food });
            }}
          />
          <IoFastFoodOutline />
          <p className="font-semibold">Food</p>
        </div>

        <div className="flex gap-3 place-items-center border px-3 rounded-md shadow-sm">
          <input
            type="checkbox"
            name="security"
            checked={props.perks.security}
            onChange={() => {
              props.setperks({ ...props.perks, security: !props.perks.security });
            }}
          />
          <BiCctv />
          <p className="font-semibold">CCTV</p>
        </div>

        <div className="flex gap-3 place-items-center border px-3 rounded-md shadow-sm">
          <input
            type="checkbox"
            name="entrance"
            checked={props.perks.entrance}
            onChange={() => {
              props.setperks({ ...props.perks, entrance: !props.perks.entrance });
            }}
          />
          <BsDoorClosed />
          <p className="font-semibold">Private Entrance</p>
        </div>
      </div>
    </div>
  );
}