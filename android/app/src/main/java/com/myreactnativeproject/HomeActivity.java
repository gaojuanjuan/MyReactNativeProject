package com.myreactnativeproject;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;

import com.myreactnativeproject.adapter.ItemAdapter;

import java.util.HashMap;
import java.util.Map;

import butterknife.BindView;
import butterknife.ButterKnife;

public class HomeActivity extends AppCompatActivity implements ItemAdapter.OnItemClickListener {

    @BindView(R.id.recycler_view)
    RecyclerView recyclerView;
    private String[] mAllFeatures;
    private ItemAdapter mItemAdapter;
    private Map<String,Class> map = new HashMap<>();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
        ButterKnife.bind(this);
        mAllFeatures = getResources().getStringArray(R.array.all_features);

        map.put(getResources().getString(R.string.communication), CommunicationActivity.class);



        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        mItemAdapter = new ItemAdapter(this, mAllFeatures);
        recyclerView.setAdapter(mItemAdapter);
        mItemAdapter.setListener(this);
    }

    @Override
    public void onItemClick(int position) {
        Intent intent = new Intent(this, map.get(mAllFeatures[position]));
        intent.putExtra("data",mAllFeatures[position]);
        startActivity(intent);
    }
}
