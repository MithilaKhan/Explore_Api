import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import "./Style.css"

const ViewDetails = () => {
    const { showId } = useParams();
    const [detail , setDetail] = useState(null)
    const {
      register,
      handleSubmit,
      formState: { errors } 
    } = useForm();


    useEffect(()=>{
        const fetchShowDetails = async () => {
            try {
              const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
              const data = await response.json();
              setDetail(data);
            } catch (error) {
              console.error('Error fetching show details:', error);
            }
          };
      
          fetchShowDetails();
    } ,[showId])

    const onSubmit = (data) => {
      // Store the form data in local storage
      localStorage.setItem('formData', JSON.stringify(data));
      console.log(data);
    };

 

    return (
        <div className="m-12  lg:flex items-center justify-center lg:h-screen mt-6">
            {
             <div className="card lg:w-1/2   shadow-xl bg-gray-200">
             <figure><img src={detail?.image?.medium} alt="Album" className="mt-8" /></figure>
             <div className="card-body text-justify ">
               <h2 className=" font-serif text-xl">{detail?.summary}</h2>
               <div className="card-actions justify-end">

                {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className=" button-55 font-bold border-gray-600  mt-4 " onClick={()=>document.getElementById('my_modal_4').showModal()}>Booking Now </button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
  <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
            <div className="form-control">
        <label className='text-lg font-semibold ps-2'>User Name</label>
        <input type="text" name="username" placeholder='User Name' className='p-3 rounded' {...register("username", { required: true })} />
        {errors.name && <span>This field is required</span>}
      </div>

            <div className="form-control">
        <label className='text-lg font-semibold ps-2'>User Email</label>
        <input type="text" name="usermail" placeholder='User Email' className='p-3 rounded' {...register("usermail", { required: true })} />
        {errors.name && <span>This field is required</span>}
      </div>

            <div className="form-control">
        <label className='text-lg font-semibold ps-2'>Show Name</label>
        <input type="text" name="showname" placeholder={detail?.name} defaultValue={detail?.name} className='p-3 rounded' {...register("showname", { required: true })} />
        {errors.name && <span>This field is required</span>}
      </div>

      <div className="form-control">
        <label className='text-lg font-semibold ps-2'>Type</label>
        <input type="text" name="type" placeholder={detail?.type} defaultValue={detail?.type} className='p-3 rounded' {...register("type", { required: true })} />
        {errors.price && <span>This field is required</span>}
      </div>

      <div className="form-control">
        <label className='text-lg font-semibold ps-2'>Image URL</label>
        <input type="url" name="imageUrl" placeholder={detail?.image?.medium}  defaultValue={detail?.image?.medium} className='p-3 rounded' {...register("imageUrl", { required: true })} />
        {errors.image && <span>This field is required</span>}
      </div>

      <div className="form-control">
        <label className='text-lg font-semibold ps-2'>Language</label>
        <input type="text" name="language" className='p-3 rounded'  placeholder={detail?.language} defaultValue={detail?.language} {...register("language", { required: true })} />
        {errors.isPopular && <span>This field is required</span>}
      </div>

      

                 </div>
    
      <div className="form-control">
        <label></label>
        <button type="submit" className='btn btn-outline w-1/2 mx-auto mt-4'>Book</button>
      </div>
      
    </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
               </div>
             </div>
           </div>
            }
        </div>
    );
};

export default ViewDetails;