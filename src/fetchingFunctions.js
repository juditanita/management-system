export const getAllEvents = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/events",
  
        {
          cache: "no-store",
        }
      );
      if (!res.ok) {
        throw new Error("Failed to load data");
      }
  
      const result = res.json();
  
      return result;
    } catch (error) {
      console.log(error);
    }
  };


  export async function getEventById( id ) {
    try {
      const res = await fetch(`http://localhost:3000/api/events/${id}`,{
        cache:"no-store"
      });
      if (!res.ok) {
        throw new Error("Error while fetching");
      }
  
      return res.json();
    } catch (error) {
      console.log(error);
    }
  }