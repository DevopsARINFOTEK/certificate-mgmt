import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Admin() {

  const navigate = useNavigate();

  const [records, setRecords] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [sortBy, setSortBy] =
    useState("latest");

  useEffect(() => {
    loadRecords();
  }, []);

  const loadRecords = async () => {
    try {

      const res =
        await api.get(
          "/certificates"
        );

      setRecords(
        res.data
      );

    } catch (error) {

      console.error(error);

    }
  };

  const filteredRecords =
    records.filter((item) =>

      item.name
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        )

      ||

      item.certificate_ref
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        )

    );

  const sortedRecords =
    [...filteredRecords];

  if (sortBy === "latest") {

    sortedRecords.sort(
      (a, b) =>
        new Date(
          b.created_at
        ) -
        new Date(
          a.created_at
        )
    );

  }

  if (sortBy === "oldest") {

    sortedRecords.sort(
      (a, b) =>
        new Date(
          a.created_at
        ) -
        new Date(
          b.created_at
        )
    );

  }

  if (sortBy === "name") {

    sortedRecords.sort(
      (a, b) =>
        a.name.localeCompare(
          b.name
        )
    );

  }

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
        ARINFOTEK Certificate Records
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">

        <input
          type="text"
          placeholder="Search Name or Reference Number"
          className="border p-3 rounded flex-1"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        <select
          className="border p-3 rounded"
          value={sortBy}
          onChange={(e) =>
            setSortBy(
              e.target.value
            )
          }
        >
          <option value="latest">
            Latest
          </option>

          <option value="oldest">
            Oldest
          </option>

          <option value="name">
            Name A-Z
          </option>

        </select>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full border shadow bg-white">

          <thead>

            <tr className="bg-blue-600 text-white">

              <th className="p-3">
                Name
              </th>

              <th className="p-3">
                Gender
              </th>

              <th className="p-3">
                Course
              </th>

              <th className="p-3">
                Start Date
              </th>

              <th className="p-3">
                End Date
              </th>

              <th className="p-3">
                Ref No
              </th>

              <th className="p-3">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {sortedRecords.map(
              (item) => (

                <tr
                  key={item.id}
                  className="border-t text-center"
                >

                  <td className="p-3">
                    {item.name}
                  </td>

                  <td className="p-3">
                    {item.gender}
                  </td>

                  <td className="p-3">
                    {item.course_name}
                  </td>

                  <td className="p-3">
                    {new Date(
                      item.start_date
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-3">
                    {new Date(
                      item.end_date
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-3">
                    {item.certificate_ref}
                  </td>

                  <td className="p-3">

                    <button
  onClick={() =>
    navigate(
      `/certificate/${item.id}`
    )
  }
  className="
    bg-blue-600
    text-white
    px-4
    py-2
    rounded
  "
>
  View
</button>

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}